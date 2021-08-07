	function validasi() {
		let nama = document.getElementById('nama').value;
		let umur = document.getElementById('umur').value;
		let kelamin = document.getElementById('kelamin').value;
		let email = document.getElementById('email').value;
		let alamat = document.getElementById('alamat').value;
		if (nama != "" && kelamin!="" && email!="" && alamat!="" && umur != "" ) {
			return true;
		} else {
			alert('Masukan data dengan lengkap dan benar !')
		}
	}