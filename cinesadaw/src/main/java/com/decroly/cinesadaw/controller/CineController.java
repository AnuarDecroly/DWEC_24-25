package com.decroly.cinesadaw.controller;

import java.util.LinkedList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/cinemas")
public class CineController {

    @GetMapping("/{cod}")
    public String getCinemaByCode(@PathVariable("cod") String cod) {
        return "Hola cinesa, estas en el cine "+cod;
    }

    @GetMapping("/salas/{cod}")
    public String getSalasByCode(@PathVariable("cod") String cod) {
        return "Hola cinesa, estas en la sala "+cod;
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
