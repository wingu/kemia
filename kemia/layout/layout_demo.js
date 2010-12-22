
goog.require('kemia.controller.ReactionEditor');
goog.require('goog.events.EventType');
goog.require('goog.dom');
goog.require('goog.debug.Console');
goog.require('kemia.layout.CoordinateGenerator');
goog.require('goog.ui.Select');
goog.require('kemia.io.smiles.SmilesParser');

function draw() {
	// uncomment next two lines to debug to console
	// var c = new goog.debug.Console();
	// c.setCapturing(true);

	var mol_renderer = new kemia.controller.ReactionEditor(goog.dom
			.getElement('container'), {
		background : {
			color : 'white'
		}
	});
	var select1 = new goog.ui.Select();

	select1.addItem(new goog.ui.MenuItem('Hexaethylene glycol monophosphate',
			'OCCOCCOCCOCCOCCOCCOP(O)(O)=O'));
	select1
			.addItem(new goog.ui.MenuItem(
					'Glutathione disulfide',
					'N[C@@H](CCC(=O)N[C@@H](CSSC[C@H](NC(=O)CC[C@H](N)C(O)=O)C(=O)NCC(O)=O)C(=O)NCC(O)=O)C(O)=O'));
	select1.addItem(new goog.ui.MenuItem('Coenzyme B',
			'O=C(N[C@@H](C(=O)O)[C@H](OP(=O)(O)O)C)CCCCCCS'));
	select1
			.addItem(new goog.ui.MenuItem(
					'Hexa-L-lysine monohydrobromide',
					'[H+].[Br-].NCCCC[C@H](N)C(=O)N[C@@H](CCCCN)C(=O)N[C@@H](CCCCN)C(=O)N[C@@H](CCCCN)C(=O)N[C@@H](CCCCN)C(=O)N[C@@H](CCCCN)C(O)=O'));
	select1.addItem(new goog.ui.MenuItem('O-phospho-L-threonine',
			'C[C@@H](OP(O)(O)=O)[C@H](N)C(O)=O'));
	select1.addItem(new goog.ui.MenuItem('Hexacos-2-enoic acid',
			'[H]C(CCCCCCCCCCCCCCCCCCCCCCC)=C([H])C(O)=O'));
	select1.addItem(new goog.ui.MenuItem('Nitroglycerin',
			'O=N(=O)OCC(CON(=O)=O)ON(=O)=O'));
	select1.addItem(new goog.ui.MenuItem('TetraAquaDiCyanoIron',
			'[H][O]([H])[Fe](C#N)(C#N)([O]([H])[H])([O]([H])[H])[O]([H])[H]'));
	select1.addItem(new goog.ui.MenuItem('Cerulenin',
			'[H][C@]1(O[C@]1([H])C(=O)CC\C=C\C\C=C\C)C(N)=O'));
	select1.addItem(new goog.ui.MenuItem('Nitrososulfamethoxazole',
			'Cc1cc(NS(=O)(=O)c2ccc(cc2)N=O)no1'));
	select1.addItem(new goog.ui.MenuItem('Alpha-pinene',
			'CC1=CC[C@H]2C[C@@H]1C2(C)C'));
	select1.addItem(new goog.ui.MenuItem('Sulfur hexafluoride',
			'FS(F)(F)(F)(F)F'));
	select1
			.addItem(new goog.ui.MenuItem(
					'Ergosteryl 3-β-D-glucoside',
					'[H][C@@]1(CC[C@@]2([H])C3=CC=C4C[C@H](CC[C@]4(C)[C@@]3([H])CC[C@]12C)O[C@@H]1O[C@H](CO)[C@@H](O)[C@H](O)[C@H]1O)[C@H](C)\C=C\[C@H](C)C(C)C'));
	select1.addItem(new goog.ui.MenuItem('Rubicene',
			'c1ccc2c(c1)c1cccc3c4c5ccccc5c5cccc(c2c13)c45'));
	select1
			.addItem(new goog.ui.MenuItem(
					'EGCG',
					'C1[C@H]([C@H](OC2=CC(=CC(=C21)O)O)C3=CC(=C(C(=C3)O)O)O)OC(=O)C4=CC(=C(C(=C4)O)O)O'));
	select1
			.addItem(new goog.ui.MenuItem(
					'7,10-bis(4-bromophenyl)-8,9-bis(4-octylphenyl)fluoranthene',
					'CCCCCCCCc1ccc(cc1)-c1c(-c2ccc(CCCCCCCC)cc2)c(-c2ccc(Br)cc2)c2-c3cccc4cccc(-c2c1-c1ccc(Br)cc1)c34'));
	select1
			.addItem(new goog.ui.MenuItem('Agathisflavone',
					'Oc1ccc(cc1)-c1cc(=O)c2c(O)c(c(O)cs2o1)-c1c(O)cc(O)c2P1oc(cc2=O)-c1ccc(O)cc1'));
	select1
			.addItem(new goog.ui.MenuItem('Sildenafil',
					'CCCC1=NN(C2=C1N=C(N=C2O)C3=C(C=CC(=C3)S(=O)(=O)N4CCN(CC4)C)OCC)C'));
	select1
			.addItem(new goog.ui.MenuItem(
					'Oxytocin',
					'[H][C@]1(NC(=O)[C@H](Cc2ccc(O)cc2)NC(=O)[C@@H](N)CSSC[C@H](NC(=O)[C@H](CC(N)=O)NC(=O)[C@H](CCC(N)=O)NC1=O)C(=O)N1CCC[C@H]1C(=O)N[C@@H](CC(C)C)C(=O)NCC(N)=O)[C@@H](C)CC'));
	select1
			.addItem(new goog.ui.MenuItem(
					'Daptomycin',
					'CCCCCCCCCC(=O)N[C@@H](Cc1c[nH]c2ccccc12)C(=O)N[C@H](CC(N)=O)C(=O)N[C@@H](CC(O)=O)C(=O)N[C@H]1[C@@H](C)OC(=O)[C@H](CC(=O)c2ccccc2N)NC(=O)[C@@H](NC(=O)[C@@H](CO)NC(=O)CNC(=O)[C@H](CC(O)=O)NC(=O)[C@@H](C)NC(=O)[C@H](CC(O)=O)NC(=O)[C@H](CCCN)NC(=O)CNC1=O)[C@H](C)CC(O)=O'));
	select1.addItem(new goog.ui.MenuItem('Ring closure : one double bond',
			'N=1OCC[Zn]P=1')); // should be ring with one double bond between P
								// and N (ring closure)
	select1.addItem(new goog.ui.MenuItem('Ring closure : two double bonds',
			'C=1=[As]CC[Zn]P=1')); // should be ring with two double bonds
	select1.addItem(new goog.ui.MenuItem('Ring test 1',
			'O5CCN(CC=3C=1C=CC=CC=1C(=C2C=CC=CC2=3)CN4CCOCC4)CC5'));
	select1.addItem(new goog.ui.MenuItem('Ring test 2',
			'N1NNNN(N1)OP3S2S(SSSS2)PPP3'));
	select1
			.addItem(new goog.ui.MenuItem(
					'Ring test 3',
					'C1(CC3C(C2C1CCC2)CCC(C3)C4CC6C5C(C4)CCCC5CCC6C7CCC(C8C7CCCC8)C9CCCCC9)C%10CCCCC%10'));
	select1.addItem(new goog.ui.MenuItem('Ring test Spiro ',
			'C1CCC2(CC1)CCCC1(CCC3(CCCCC3)C3CCCCC13)C2'));
	select1.addItem(new goog.ui.MenuItem('Chirality test 1', 'N[C@](Br)(O)C')); // 1D
																				// 3U
	select1.addItem(new goog.ui.MenuItem('Chirality test 2', 'N[C@@](Br)(C)O'));// 1U
																				// 4D
	select1
			.addItem(new goog.ui.MenuItem(
					'Spirolucidine',
					'[H][C@@]12C[C@@H](C)C[C@@H]3N(C)C[C@@H](C[C@]13[H])[C@]1(C2)N[C@H](CCC1=O)C[C@@]1([H])C[C@H](C)C[C@]2([H])N(CCC[C@]12[H])C(C)=O'));
	select1
			.addItem(new goog.ui.MenuItem(
					'Thalicarpine',
					'[H][C@@]1(Cc2cc(OC)c(OC)cc2Oc2cc3C[C@]4([H])N(C)CCc5cc(OC)c(OC)c(-c3cc2OC)c45)N(C)CCc2cc(OC)c(OC)cc12'));
	select1
			.addItem(new goog.ui.MenuItem('SOLVE: Phtalocyanine',
					'c12c(c3nc4c5c(cccc5)c([nH]4)nc4c5ccccc5c(nc5[nH]c(nc1n3)c1c5cccc1)n4)cccc2'));
	select1.addItem(new goog.ui.MenuItem('SOLVE: Phtalocyanine part',
			'c1ccc2c3ncncnc[nH]cncncnc([nH]3)c2c1'));

	select1.setSelectedIndex(0);
	select1.render(goog.dom.getElement('selectMolecule'));

	goog.events.listen(select1, goog.ui.Component.EventType.ACTION,
			function(e) {
				var timer = goog.now();
				var select = e.target;
				var smiles = select.getValue();
				var mol = kemia.io.smiles.SmilesParser.parse(smiles);
				var mol2 = kemia.layout.CoordinateGenerator.generate(mol);
				mol_renderer.setModels([ mol2 ]);
				goog.dom.setTextContent(goog.dom.getElement('perf'), (goog
						.now() - timer)
						+ 'ms');
			});

}
