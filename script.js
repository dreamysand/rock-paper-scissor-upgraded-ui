document.addEventListener('DOMContentLoaded', function() {
	// Probabilitas pilhan komputer
	const probabilities = new Map([
		['batu', 1/3],
		['gunting', 1/3],
		['kertas', 1/3],
	]);

	// Rule permainan
	const rule = {
		"batu": {
			"batu": "Seri",
			"gunting": "Menang",
			"kertas": "Kalah",
		},
		"gunting": {
			"batu": "Kalah",
			"gunting": "Seri",
			"kertas": "Menang",
		},
		"kertas": {
			"batu": "Menang",
			"gunting": "Kalah",
			"kertas": "Seri",
		},
	};

	// Function untuk menentukan pilihan komputer
	function randComputerChoice() {
		// Generate angka random
		let rand_number = Math.random();

		// Probability secara kumulatif
		let cumulative_probability = 0;

		// Mencoba mencocokkan dengan pilihannya
		for (const [computer_choice, probability] of probabilities) {
			cumulative_probability += probability;
			if (rand_number <= cumulative_probability) {
				// Return pilihan komputer
				return computer_choice;
			}
		}
	}

	// Function cek menang
	function checkWin(user_choice, computer_choice) {
		// Return hasil
		return rule[user_choice][computer_choice];
	}

	// Kondisi ketika form disubmit
	document.getElementById('rps').addEventListener('submit', function(e) {
		// Biar gak reload otomatis
		e.preventDefault();

		// Pilihan user
		const user_choice = document.activeElement.value;
		
		// Pilihan komputer
		const computer_choice = randComputerChoice();
		
		// Result 
		const result = checkWin(user_choice, computer_choice);

		// Output ke html
		document.getElementById('userChoice').innerText = user_choice;
		document.getElementById('computerChoice').innerText = computer_choice;
		document.getElementById('resultFinale').innerText = result;
	});
})