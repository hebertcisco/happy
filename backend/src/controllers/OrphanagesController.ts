import * as Yup from "yup";

import { Request, Response } from "express";

import Orphanage from "../models/Orphanage";
import { getRepository } from "typeorm";
import orphanageView from "../views/orphanages_view";

export default {
  async index(response: Response) {
    const orphanageRepository = getRepository(Orphanage);

    const orphanages = await orphanageRepository.find({
      relations: ["images"],
    });

    try {
      return response.status(200).json(orphanageView.renderMany(orphanages));
    } catch {
      return response.status(400).json({ status: 400 });
    }
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const orphanageRepository = getRepository(Orphanage);

    const orphanage = await orphanageRepository.findOneOrFail(id, {
      relations: ["images"],
    });

    try {
      return response.status(200).json(orphanageView.render(orphanage));
    } catch {
      return response.status(400).json({ status: 400 });
    }
  },
  async create(request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;
    const orphanageRepository = getRepository(Orphanage);

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map((image) => {
      return { path: image.filename };
    });
  
    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends: JSON.parse(open_on_weekends),
      images
  };
    
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ),
    });
    await schema.validate(data, { abortEarly: false });
    
    const orphanage = orphanageRepository.create(data);

    try {
      await orphanageRepository.save(orphanage);
      return response.status(201).json({ created: true });
    } catch {
      return response.status(400).json({ created: false });
    }
  },
};
