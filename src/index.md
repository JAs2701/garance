---
title: Archives Nationales
layout: "main.njk"
---


<div class="row">
	<div class="col-md">
	    <h1 class="title-Header ">Graphe Archivistique pour la Recherche, l'Accès et la Navigation des Connaissances Enhancées. </h1>
        <ul>
			{%- for item in metadata.scheme.graph -%}
				<li><a>{{ item.dctitle | Label('fr') }}</a> <small class="numConcepts"> - {{ item.inverse_inScheme.length }} Concepts</small></li>
			{%- endfor-%}
		</ul>
    </div>
</div>
