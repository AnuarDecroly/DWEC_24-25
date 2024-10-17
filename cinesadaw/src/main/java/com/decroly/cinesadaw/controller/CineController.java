package com.decroly.cinesadaw.controller;

import java.util.LinkedList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.decroly.cinesadaw.model.Cine;
import com.decroly.cinesadaw.model.Sala;
import com.decroly.cinesadaw.service.CineService;




@RestController
@RequestMapping("/cinemas")
public class CineController {
    
    private final CineService cineService;
	
	public CineController(CineService cineService)
	{
		this.cineService = cineService;
	}


    @GetMapping("/{cod}")
    public Cine getCinemaByCode(@PathVariable("cod") String cod) {
        return this.cineService.getCinemaByCod(cod);
    }

    @GetMapping("/salas/{cod}")
    public Sala getSalasByCode(@PathVariable("cod") String cod) {
        return this.cineService.getSalaByCod(cod);
    }


    @GetMapping("/salas/")
    public List<String> getSalasByCode() {
        List<String> cines = new LinkedList<>();
        cines.add("Bahia Santander");
        cines.add("Bahia Real");
        cines.add("Yelmo Santander");
        return cines;
    }
    
}
