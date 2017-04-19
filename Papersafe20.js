

// Require the file system
fs = require("fs");
console.log("Waiting for Vanitygen to find a match...")
// Watch the sim directory
fs.watch("match.txt", { persistent: true }, function (event, fileName) {
	console.log("The match.txt file has been altered with this value: " + event);
	console.log(fileName + "\n");

	var gen_long = new Date().toISOString()

	var yrmodt = gen_long.substring(0,10);
	var hr = gen_long.substring(14,16)
	var min = gen_long.substring(17,19)

	console.log(yrmodt + hr + min)

	var gen = yrmodt + hr + min


	var fs = require('fs')
		, filename = process.argv[2];
	fs.readFile("match.txt", 'utf8', function(err, data) {
	  if (err) throw err;
	  console.log('OK: ' + filename);
	  console.log(data)

	  

	var raw_key = data

	if (data.length > 0) {
	    //do something
		console.log("String has value")


		var string = data

		var words = data.split(' ');

		var word0 = words[0];
		var word1 = words[1];
		var word2 = words[2];
		var word3 = words[3];
		var word4 = words[4];
		var word5 = words[5];
		var word6 = words[6];

		if (data.length > 125) {


			console.log('\r\n' + 'word0: ' + '+' + word0 + '+' + '\r\n' + 'word1: ' + '+' + word1 + '+' + '\r\n' + 'word2: ' + '+' + word2 + '+' + '\r\n' + 'word3: ' + '+' + word3 + '+' + '\r\n' + 'word4: ' + '+' + word4 + '+' + '\r\n' + 'word5: ' + '+' + word5 + '+' + '\r\n' + 'word6: ' + '+' + word6 + '+' + '\r\n')
			
			fbits1 = word1.slice(0, -10);
			fbits = fbits1.replace(/\s+/g, '');
			console.log('+' + fbits + '+')

			pubk1 = word2.slice(0, -10);
			pubk = pubk1.replace(/\s+/g, '');
			console.log('+' + pubk + '+')

			prkey1 = word3.slice(0,-8);
			prkey = prkey1.replace(/\s+/g, '');
			console.log('+' + prkey + '+')

		}

		else {

			console.log('\r\n' + 'word0: ' + '+' + word0 + '+' + '\r\n' + 'word1: ' + '+' + word1 + '+' + '\r\n' + 'word2: ' + '+' + word2 + '+' + '\r\n' + 'word3: ' + '+' + word3 + '+' + '\r\n' + 'word4: ' + '+' + word4 + '+' + '\r\n' + 'word5: ' + '+' + word5 + '+' + '\r\n' + 'word6: ' + '+' + word6 + '+' + '\r\n')
			
			fbits1 = word1.slice(0, -10);
			fbits = fbits1.replace(/\s+/g, '');
			console.log('+' + fbits + '+')

			pubk1 = word2.slice(0, -10);
			pubk = pubk1.replace(/\s+/g, '');
			console.log('+' + pubk + '+')

			prkey1 = word3;
			prkey = prkey1.replace(/\s+/g, '');
			console.log('+' + prkey + '+')
		}




		//var firstbits=string.substring(9,15);

		//console.log(firstbits)

		//var string = data
		//var address=string.substring(24,59);

		//console.log(address)

		//var string = data
		//var privkey=string.substring(70,121);

		//console.log(privkey)



		//begin random number generation
		var crypto = require('crypto');

		function randomValueHex (len) {
		    return crypto.randomBytes(Math.ceil(len/2))
		        .toString('hex') // convert to hexadecimal format
		        .slice(0,len);   // return required number of characters
		}
		var orig_passphrase = randomValueHex(10) // value 'd5be8583137b'

		var passphrase_str = orig_passphrase.toString();

		var passphrase = passphrase_str.toUpperCase();
		console.log(passphrase)

		var passPhraseWif = passphrase
		console.log('+' + passPhraseWif + '+')






		//create variables for BIP38 encryption
		var addressWif = pubk
		console.log('+' + addressWif + '+')
		
		var privateKeyWif = prkey
		console.log('+' + privateKeyWif + '+')




		//npm install bip38
		var Bip38 = require('bip38')
		var bip38 = new Bip38()
		bip38.version = {private: 0x80, public: 0x0};
		var keyman = bip38.encrypt(privateKeyWif, passPhraseWif, addressWif, function (status) {
		console.log(status.percent) 
		})
		console.log("Public Key: " + addressWif)
		console.log("Passphrase: " + passPhraseWif)
		console.log("Encrypted Key: " + keyman)




		// create image files containing QR codes
		//npm install qr-image
		var tstamp = Math.floor(Date.now()/1000)


		var qr = require('qr-image');  
		var fs = require('fs');
		var code = qr.image(pubk, { type: 'png' });  
		var output = fs.createWriteStream('Wallets\\'+tstamp+'_'+fbits+'_QR_Pubkey.png')
		code.pipe(output);

		var qr = require('qr-image');  
		var fs = require('fs');
		var code = qr.image(keyman, { type: 'png' });  
		var output2 = fs.createWriteStream('Wallets\\'+tstamp+'_'+fbits+'_QR_Privkey.png')
		code.pipe(output2);  


		var qr = require('qr-image');  
		var fs = require('fs');
		var code = qr.image(passPhraseWif, { type: 'png' });  
		var output3 = fs.createWriteStream('Wallets\\'+tstamp+'_'+fbits+'_QR_Passphrase.png')
		code.pipe(output3);  










		var d = new Date,
    	dformat = [d.getMonth()+1,
        		   d.getDate(),
               	   d.getFullYear()].join('/')+' '+
                  [d.getHours(),
               	   d.getMinutes(),
               	   d.getSeconds()].join(':');



        //Write text files

        
		fs = require('fs');
		fs.appendFile('Wallets\\Papersafe_Wallets_Log.txt', "Vanitygen Match: " + fbits + '\r\n' + "Public Key: " + addressWif + '\r\n' + "Encrypted Private Key: " + keyman + '\r\n' + '\r\n' + "BIP38 Passphrase: " + passPhraseWif + '\r\n' + '\r\n'+ "Unencrypted Private Key: " + privateKeyWif + '\r\n' + '\r\n' + "Unix/Epoch - Date/Time Created: " + tstamp + '\r\n' + '\r\n' + "Calendar Date/Time Created: " + d + '\r\n' + '\r\n' + "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~" + '\r\n' + '\r\n' + '\r\n', function (err) {
		  	if (err) return console.log(err);
		  	console.log('The keys were written to Papersafe_Wallets_Log.txt');
		  	console.log('Please wait 10 seconds for PDF to finish processing...');
		});

		fs = require('fs');
		fs.writeFile('Wallets\\'+tstamp+'_'+fbits+'_WalletDetail.txt', "Vanitygen Match: " + fbits + '\r\n' + "Public Key: " + addressWif + '\r\n' + "Encrypted Private Key: " + keyman + '\r\n' + '\r\n' + "BIP38 Passphrase: " + passPhraseWif + '\r\n' + '\r\n'+ "Unencrypted Private Key: " + privateKeyWif + '\r\n' + '\r\n' + "Unix/Epoch - Date/Time Created: " + Math.floor(Date.now()/1000) + '\r\n' + '\r\n' + "Calendar Date/Time Created: " + d + '\r\n' + '\r\n', function (err) {
		  	if (err) return console.log(err);
		  	console.log('The Keys were written to '+tstamp+'_'+fbits+'_PS_WalletDetail.txt');
		  	console.log('Please wait 10 seconds for PDF to finish processing...');
		});


		fs = require('fs');
		fs.writeFile('match.txt', '', function (err) {
		  	if (err) return console.log(err);
		});

		fs = require('fs');
		fs.writeFile('stamp.txt', tstamp, function (err) {
		  	if (err) return console.log(err);
		});

		fs = require('fs');
		fs.writeFile('found.txt', d, function (err) {
		  	if (err) return console.log(err);
		});

		fs = require('fs');
		fs.writeFile('pub.txt', addressWif, function (err) {
		  	if (err) return console.log(err);
		});

		fs = require('fs');
		fs.writeFile('priv.txt', keyman, function (err) {
		  	if (err) return console.log(err);
		});

		fs = require('fs');
		fs.writeFile('pass.txt', passPhraseWif, function (err) {
		  	if (err) return console.log(err);
		});

		fs = require('fs');
		fs.writeFile('bits.txt', fbits, function (err) {
		  	if (err) return console.log(err);
		});



	} else { 

		function sleep(time, callback) {
		    var stop = new Date().getTime();
		    while(new Date().getTime() < stop + time) {
		        ;
		    }
		    callback();
		}
		sleep(10000, function() {
		   // executes after 6 seconds, and blocks the thread
		   console.log("Waiting for Vanitygen to find next address...")

		   var fs = require('fs');
		   var stamp = fs.readFileSync('stamp.txt', 'utf8');
		   console.log(stamp);

		   var fs = require('fs');
		   var found = fs.readFileSync('found.txt', 'utf8');
		   console.log(found);

		   var fs = require('fs');
		   var pub = fs.readFileSync('pub.txt', 'utf8');
		   console.log(pub);

		   var fs = require('fs');
		   var priv = fs.readFileSync('priv.txt', 'utf8');
		   console.log(priv);		   

		   var fs = require('fs');
		   var pass = fs.readFileSync('pass.txt', 'utf8');
		   console.log(pass);	

		   var fs = require('fs');
		   var bits = fs.readFileSync('bits.txt', 'utf8');
		   console.log(bits);	



		   
			var tstampnow = Math.floor(Date.now()/1000)
			var fs = require('fs');
			var oldstamp = fs.readFileSync('stamp.txt', 'utf8');

			var oldstamp2 = parseFloat(oldstamp)
			
			console.log('The time now is: ' + tstampnow);
			console.log('The last address was found: ' + oldstamp);
			
			if (oldstamp2 > (tstampnow-5)) {
				console.log("Waiting for more time to pass since last match.")
			} else {
				console.log("Match found. Time to encrypt.")
				   //npm install pdfkit
				   var PDFDocument, doc
				   var fs = require('fs');
				   PDFDocument = require('pdfkit');
				   doc = new PDFDocument;
				   doc.pipe(fs.createWriteStream('Wallets\\'+stamp+'_'+bits+'_WalletDetail.pdf'));


				   // PDF Creation logic goes here
				   // Set a title and pass the X and Y coordinates
				   // Set a title and pass the X and Y coordinates
				   doc.fontSize(10).text('Bitcoin Address:' + '\n', 90, 545);
				   doc.fontSize(9).text(pub, 90, 560);
				   doc.image('Wallets\\'+stamp+'_'+bits+'_QR_Pubkey.png', 40, 540, {width: 50});

				   doc.fontSize(10).text('Encrypted Private Key (Password required)' + '\n', 317, 580);
				   doc.fontSize(9).text(priv, 191, 595);
				   //doc.image('Wallets\\'+stamp+'_'+bits+'_QR_Privkey.png', 420, 640, {width: 100});
				   doc.image('Wallets\\'+stamp+'_'+bits+'_QR_Privkey.png', 510, 550, {width: 60});

				   doc.fontSize(9).text(pass, 282, 700);


				   // Set the paragraph width and align direction
				   //doc.fontSize(10).text("Found on: " + found + '\n' + '\n' + "Vanitygen Match: " + bits + '\n' + '\n' + "Public Key: " + pub + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + "Encrypted Private Key: " + priv + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + "BIP38 Passphrase: " + pass + '\n', {
					    //width: 500,
					    //align: 'left'
				   //});

				   //doc.image('Wallets\\'+stamp+'_'+bits+'_QR_Pubkey.png', 50, 153, {width: 100});
				   //doc.image('Wallets\\'+stamp+'_'+bits+'_QR_Privkey.png', 50, 282, {width: 100});
				   //doc.image('Wallets\\'+stamp+'_'+bits+'_QR_Passphrase.png', 50, 410, {width: 75});



				   doc.end();



				   //npm install printer
				   //var printer = require('printer');
				   //var fs = require('fs');

				   //var info = fs.readFileSync('Wallets\\'+stamp+'_'+bits+'_WalletDetail.pdf').toString();

				   //function sendPrint() {
				     //printer.printDirect({
				       //data: info,
				       //type: 'RAW',
				       //success: function (jobID) {
				         //console.log("ID: " + jobID);
				       //},
				       //error: function (err) {
				         //console.log('printer module error: '+err);
				         //throw err;
				       //}
				     //});
				   //}

				   //sendPrint();



				   console.log("PDF Process complete. Waiting for Vanitygen to find next address...")

				};

		});
		

	}


});

});










