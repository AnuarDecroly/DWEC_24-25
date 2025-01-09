package com.decroly.dawnesa.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.decroly.dawnesa.model.Sala;
import com.decroly.dawnesa.service.CineService;

@RestController
@RequestMapping("/api/salas")
public class SalaController {
    private final CineService cineService;

    public SalaController(CineService cineService){
        this.cineService = cineService;
    }

    @GetMapping("/all")
	public List<Sala> getAllSalas() {
		return this.cineService.getAllSalas();
	}

	@GetMapping("/cod:{cod}")
	public Sala getSalasByCod(@PathVariable("cod") String cod) {
		return this.cineService.getSalaByCod(cod);
	}

	@GetMapping("/cines/cine:{cod}")
	public List<Sala> getSalasByCinemaCod(@PathVariable("cod") String cod) {
		return this.cineService.getSalasByCine(cod);
	}

	@GetMapping("/aforo:{aforo}")
	public List<Sala> getSalasByAforoGreaterThan(@PathVariable("aforo") int aforo) {
		return this.cineService.getSalasByAforoGreaterThan(aforo);
	}

    @GetMapping("/cine/aforo/")
	public List<Sala> findBycodCineAndAforoGreaterThan(@RequestParam String codCine, @RequestParam int aforo) {
		return this.cineService.getSalasByAforoGreaterThanByCine(codCine, aforo);
	}

}
