package com.decroly.dawnesa.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.decroly.dawnesa.model.Cine;
import com.decroly.dawnesa.service.CineService;




@RestController
@RequestMapping("/api/cinemas")
public class CineController {

    private final CineService cineService;

    public CineController(CineService cineService){
        this.cineService = cineService;

    }

    //http://localhost:8083/api/cinemas/all
    @GetMapping("/all")
    public ResponseEntity<List<Cine>> getAllCinemas() {
        List<Cine> cines = this.cineService.getAllCinemas();
        if(cines.size() > 0){
            return ResponseEntity.ok(cines);
        }else{
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        
    }

    //http://localhost:8083/api/cinemas/cod
    @GetMapping("/{cod}")
    public Cine getCinemaByCod(@PathVariable("cod") String cod) {
        return this.cineService.getCinemaByCode(cod);
    }

    //http://localhost:8083/api/cinemas/admin/delete/{cod}
    @DeleteMapping("/admin/delete/{cod}")
    public boolean deleteCinemaByCode(@PathVariable("cod") String cod){
        return this.cineService.deleteCinemaByCode(cod);
    }

    //http://localhost:8083/api/cinemas/admin/addCine
    @PostMapping("/admin/addcine")
    public Cine createCine(@RequestBody Cine cine) {
        return this.cineService.createCine(cine);
    }
    //http://localhost:8083/api/cinemas/admin/updatecine
    @PutMapping("/admin/updatecine")
    public Cine updateCine( @RequestBody Cine cine) {
        
        return this.cineService.updateCine(cine);
    }
    
    
    

}
