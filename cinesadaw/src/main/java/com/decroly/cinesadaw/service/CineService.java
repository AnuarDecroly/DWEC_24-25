package com.decroly.cinesadaw.service;

import org.springframework.stereotype.Service;

import com.decroly.cinesadaw.model.Cine;
import com.decroly.cinesadaw.model.Sala;

@Service
public class CineService {


    public Cine getCinemaByCod(String cod)
	{
        Cine miCine = new Cine("Cinesa Santander", 123, cod, "El corte Ingles Santander");
		return miCine;
	}

    public Sala getSalaByCod(String cod)
	{
        Sala miSala = new Sala(cod, 235, true, true, false);
		return miSala;
	}

}
