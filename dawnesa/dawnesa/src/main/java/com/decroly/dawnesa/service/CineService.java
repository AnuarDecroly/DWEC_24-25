package com.decroly.dawnesa.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.decroly.dawnesa.model.Cine;
import com.decroly.dawnesa.repository.CineRepository;


@Service
public class CineService {

    private final CineRepository cineRepository;

    public CineService(CineRepository cineRepository){
        this.cineRepository = cineRepository;

    }

    public List<Cine> getAllCinemas() {
		return this.cineRepository.findAll();
	}

    public Cine getCinemaByCode(String cod){
        return this.cineRepository.findById(cod).orElse(null);
    }

    public boolean  deleteCinemaByCode(String cod){
        boolean response =  false;
        if(this.cineRepository.findById(cod).orElse(null) != null){
            this.cineRepository.deleteById(cod);
            response = true;
        }
        return response; 
    }

    public Cine createCine(Cine cine){
        Cine miCine =  cine;
        if(cine != null){
            miCine = this.cineRepository.save(cine);

        }
        return miCine;
    }

    public Cine updateCine(Cine cine){
        Cine miCine =  cine;
        if(cine != null){
            miCine = this.cineRepository.save(cine);

        }
        return miCine;
    }
}
