package com.example.ejemploretrofitcompleto

import android.annotation.SuppressLint
import android.view.View
import androidx.recyclerview.widget.RecyclerView
import com.example.ejemploretrofitcompleto.databinding.ItemserieBinding
import com.example.ejemploretrofitcompleto.model.Serie
import com.squareup.picasso.Picasso

class SerieViewHolder(view: View): RecyclerView.ViewHolder(view) {

    private val binding = ItemserieBinding.bind(view)

    fun bind(serie: Serie){
        Picasso.get().load(serie.image).into(binding.ivSerie)
        binding.tvTitle.setText("Titulo: "+serie.title)
        binding.tvCreator.setText("Creador: " + serie.creator)
        binding.tvRating.setText("Puntuación: "+ serie.rating.toString())
    }
}