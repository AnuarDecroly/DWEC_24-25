package com.example.ejemploretrofitcompleto

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.ejemploretrofitcompleto.model.Serie

class SerieAdapter(val series: List<Serie>) : RecyclerView.Adapter<SerieViewHolder>(){

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): SerieViewHolder {
        val layoutInflater : LayoutInflater = LayoutInflater.from(parent.context)
        return SerieViewHolder(layoutInflater.inflate(R.layout.itemserie, parent, false))
    }

    override fun getItemCount(): Int {
        return series.size
    }

    override fun onBindViewHolder(holder: SerieViewHolder, position: Int) {
        val item : Serie = series[position]
        holder.bind(item)
    }

}