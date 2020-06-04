
// axios pagina #1 o principal //
axios.get('https://rickandmortyapi.com/api/character')
    .then(function (response) {

    	var rick = document.getElementById('campo').value;
    	var morty = document.getElementById('campo1').value; 
    	var summer = document.getElementById('campo2').value; 

    	// Rick Sanchez //
        if (rick == 1) {
    		document.getElementById('name').value = response.data.results[0].name;
    		document.getElementById('estado').value = response.data.results[0].status;
    		document.getElementById('especie').value = response.data.results[0].species;
    		document.getElementById('genero').value = response.data.results[0].gender;
    		document.getElementById('origen').value = response.data.results[0].origin.name;
		} 

		// Morty Smith //
		if (morty == 2) {
			document.getElementById('names').value = response.data.results[1].name;
			document.getElementById('estados').value = response.data.results[1].status;
    		document.getElementById('especies').value = response.data.results[1].species;
    		document.getElementById('generos').value = response.data.results[1].gender;
    		document.getElementById('origens').value = response.data.results[1].origin.name;
		}

		// Summer Smith //
		if (summer == 3) {
			document.getElementById('namess').value = response.data.results[2].name;
			document.getElementById('estadoss').value = response.data.results[2].status;
    		document.getElementById('especiess').value = response.data.results[2].species;
    		document.getElementById('geneross').value = response.data.results[2].gender;
    		document.getElementById('origenss').value = response.data.results[2].origin.name;
		}

    }) 
    	.catch(function (error) {
        console.log(error);
    })
    	.then(function (response) {
});

// axios pagina #2 //
axios.get('https://rickandmortyapi.com/api/character')
    .then(function (response) {

    	var beth = document.getElementById('campo3').value; 
    	var jerry = document.getElementById('campo4').value; 
    	var abadango = document.getElementById('campo5').value; 

    	// Beth Smith //
        if (beth == 4) {
    		document.getElementById('nameB').value = response.data.results[3].name;
    		document.getElementById('estadoB').value = response.data.results[3].status;
    		document.getElementById('especieB').value = response.data.results[3].species;
    		document.getElementById('generoB').value = response.data.results[3].gender;
    		document.getElementById('origenB').value = response.data.results[3].origin.name;
		} 

		// Jerry Smith //
        if (jerry == 5) {
    		document.getElementById('nameJ').value = response.data.results[4].name;
    		document.getElementById('estadoJ').value = response.data.results[4].status;
    		document.getElementById('especieJ').value = response.data.results[4].species;
    		document.getElementById('generoJ').value = response.data.results[4].gender;
    		document.getElementById('origenJ').value = response.data.results[4].origin.name;
		}

		// Abadango Cluster //
        if (abadango == 6) {
    		document.getElementById('nameA').value = response.data.results[5].name;
    		document.getElementById('estadoA').value = response.data.results[5].status;
    		document.getElementById('especieA').value = response.data.results[5].species;
    		document.getElementById('generoA').value = response.data.results[5].gender;
    		document.getElementById('origenA').value = response.data.results[5].origin.name;
		}

    }) 
    	.catch(function (error) {
        console.log(error);
    })
    	.then(function (response) {
});

// axios pagina #3  //
axios.get('https://rickandmortyapi.com/api/character')
    .then(function (response) {

    	var abradolf = document.getElementById('campo6').value; 
    	var adjudicator = document.getElementById('campo7').value; 
    	var agency = document.getElementById('campo8').value; 

    	// Abradolf Lincler //
        if (abradolf == 7) {
    		document.getElementById('nameAB').value = response.data.results[6].name;
    		document.getElementById('especieAB').value = response.data.results[6].species;
    		document.getElementById('generoAB').value = response.data.results[6].gender;
    		document.getElementById('origenAB').value = response.data.results[6].origin.name;
		} 

		// Adjudicator Rick //
        if (adjudicator == 8) {
    		document.getElementById('nameAJ').value = response.data.results[7].name;
    		document.getElementById('estadoAJ').value = response.data.results[7].status;
    		document.getElementById('especieAJ').value = response.data.results[7].species;
    		document.getElementById('generoAJ').value = response.data.results[7].gender;
		}

		// Agency Director //
        if (agency == 9) {
    		document.getElementById('nameAD').value = response.data.results[8].name;
    		document.getElementById('estadoAD').value = response.data.results[8].status;
    		document.getElementById('especieAD').value = response.data.results[8].species;
    		document.getElementById('generoAD').value = response.data.results[8].gender;
    		document.getElementById('origenAD').value = response.data.results[8].origin.name;
		}

    }) 
    	.catch(function (error) {
        console.log(error);
    })
    	.then(function (response) {
});

// axios pagina #4  //
axios.get('https://rickandmortyapi.com/api/character')
    .then(function (response) {

    	var alan = document.getElementById('campo9').value; 
    	var albert = document.getElementById('campo10').value; 
    	var alexander = document.getElementById('campo11').value; 

    	// Alan Rails //
        if (alan == 10) {
    		document.getElementById('nameAL').value = response.data.results[9].name;
    		document.getElementById('estadoAL').value = response.data.results[9].status;
    		document.getElementById('especieAL').value = response.data.results[9].species;
    		document.getElementById('generoAL').value = response.data.results[9].gender;
		} 

		// Albert Einstein //
        if (albert == 11) {
    		document.getElementById('nameALB').value = response.data.results[10].name;
    		document.getElementById('estadoALB').value = response.data.results[10].status;
    		document.getElementById('especieALB').value = response.data.results[10].species;
    		document.getElementById('generoALB').value = response.data.results[10].gender;
    		document.getElementById('origenALB').value = response.data.results[10].origin.name;
		}

		// Alexander //
        if (alexander == 12) {
    		document.getElementById('nameAX').value = response.data.results[11].name;
    		document.getElementById('estadoAX').value = response.data.results[11].status;
    		document.getElementById('especieAX').value = response.data.results[11].species;
    		document.getElementById('generoAX').value = response.data.results[11].gender;
    		document.getElementById('origenAX').value = response.data.results[11].origin.name;
		}

    }) 
    	.catch(function (error) {
        console.log(error);
    })
    	.then(function (response) {
});

// axios pagina #5  //
axios.get('https://rickandmortyapi.com/api/character')
    .then(function (response) {

    	var googah = document.getElementById('campo12').value; 
    	var alienM = document.getElementById('campo13').value; 
    	var alienR = document.getElementById('campo14').value; 

    	// Alien Googah //
        if (googah == 13) {
    		document.getElementById('nameG').value = response.data.results[12].name;
    		document.getElementById('especieG').value = response.data.results[12].species;
		} 

		// Alien Morty //
        if (alienM == 14) {
    		document.getElementById('nameAM').value = response.data.results[13].name;
    		document.getElementById('especieAM').value = response.data.results[13].species;
    		document.getElementById('generoAM').value = response.data.results[13].gender;
		}

		// Alien Rick //
        if (alienR == 15) {
    		document.getElementById('nameAR').value = response.data.results[14].name;
    		document.getElementById('especieAR').value = response.data.results[14].species;
    		document.getElementById('generoAR').value = response.data.results[14].gender;
		}

    }) 
    	.catch(function (error) {
        console.log(error);
    })
    	.then(function (response) {
});

// axios pagina #6  //
axios.get('https://rickandmortyapi.com/api/character')
    .then(function (response) {

    	var amish = document.getElementById('campo15').value; 
    	var annie = document.getElementById('campo16').value; 
    	var antennaM = document.getElementById('campo17').value; 

    	// Amish Cyborg //
        if (amish == 16) {
    		document.getElementById('nameAH').value = response.data.results[15].name;
    		document.getElementById('estadoAH').value = response.data.results[15].status;
    		document.getElementById('especieAH').value = response.data.results[15].species;
    		document.getElementById('generoAH').value = response.data.results[15].gender;
		} 

		// Annie //
        if (annie == 17) {
    		document.getElementById('nameAN').value = response.data.results[16].name;
    		document.getElementById('estadoAN').value = response.data.results[16].status;
    		document.getElementById('especieAN').value = response.data.results[16].species;
    		document.getElementById('generoAN').value = response.data.results[16].gender;
    		document.getElementById('origenAN').value = response.data.results[16].origin.name;
		}

		// Antenna Morty //
        if (antennaM == 18) {
    		document.getElementById('nameAMO').value = response.data.results[17].name;
    		document.getElementById('estadoAMO').value = response.data.results[17].status;
    		document.getElementById('especieAMO').value = response.data.results[17].species;
    		document.getElementById('generoAMO').value = response.data.results[17].gender;
		}

    }) 
    	.catch(function (error) {
        console.log(error);
    })
    	.then(function (response) {
});

// axios pagina #7  //
axios.get('https://rickandmortyapi.com/api/character')
    .then(function (response) {

    	var antennaR = document.getElementById('campo18').value; 
    	var ants = document.getElementById('campo19').value; 

    	// Antenna Rick //
        if (antennaR == 19) {
    		document.getElementById('nameARI').value = response.data.results[18].name;
    		document.getElementById('especieARI').value = response.data.results[18].species;
    		document.getElementById('generoARI').value = response.data.results[18].gender;
		} 

		// Ants in my Eyes Johnson //
        if (ants == 20) {
    		document.getElementById('nameANT').value = response.data.results[19].name;
    		document.getElementById('especieANT').value = response.data.results[19].species;
    		document.getElementById('generoANT').value = response.data.results[19].gender;
		}

    }) 
    	.catch(function (error) {
        console.log(error);
    })
    	.then(function (response) {
});
