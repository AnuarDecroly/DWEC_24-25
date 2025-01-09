package com.decroly.dawnesa.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.decroly.dawnesa.model.Cine;
import com.decroly.dawnesa.model.Sala;
import com.decroly.dawnesa.repository.CineRepository;
import com.decroly.dawnesa.repository.SalaRepository;


@Service
public class CineService {

    private final CineRepository cineRepository;
    private final SalaRepository salaRepository;

    public CineService(CineRepository cineRepository, SalaRepository salaRepository ){
        this.cineRepository = cineRepository;
        this.salaRepository = salaRepository;

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

    //Obtener todas las salas del modelo
    public List<Sala> getAllSalas(){
        return this.salaRepository.findAll();
    }

    public Sala getSalaByCod(String codSala){
        return this.salaRepository.findById(codSala).orElse(null);
    }

    //Obtener sala por cine
    public List<Sala> getSalasByCine(String codCine){
        Cine cine = this.getCinemaByCode(codCine);
        List<Sala> salas = null;
        if(cine != null){
            salas = this.salaRepository.findByCine(cine);
        }
        return salas;
    }

    //Obtener salas por aforo mayor o igual a un valor
    public List<Sala> getSalasByAforoGreaterThan(int aforo){
        return this.salaRepository.findByAforoGreaterThanEqual(aforo);
    }

        //Obtener salas por aforo mayor o igual a un valor
        public List<Sala> getSalasByAforoGreaterThanByCine(String codCine, int aforo){
            List<Sala> salas = this.getSalasByCine(codCine);
            return salas.stream().filter(sala -> sala.getAforo() >= aforo).toList();
        } 


}
