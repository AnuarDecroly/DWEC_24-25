package com.decroly.dawnesa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.decroly.dawnesa.model.Cine;
import com.decroly.dawnesa.model.Sala;

public interface SalaRepository extends JpaRepository<Sala,String>{

    public List<Sala> findByCine(Cine codCine);

    public List<Sala> findByAforoGreaterThanEqual(int aForo);



}
