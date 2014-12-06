var Water = APP.Mesh.Static.extend({

	initialize: function(){
/*
		// Add light
		var directionalLight = new THREE.DirectionalLight(0xffff55, 1);
		directionalLight.position.set(-600, 300, 600);
		this.ms_Scene.add(directionalLight);
*/
		// Load textures
		var waterNormals = new THREE.ImageUtils.loadTexture('../assets/img/waternormals.jpg');
		waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

		// Create the water effect
		this._water = new THREE.Water(this.ms_Renderer, this.ms_Camera, this.ms_Scene, {
			textureWidth: 256,
			textureHeight: 256,
			waterNormals: waterNormals,
			alpha: 	1.0,
			sunDirection: directionalLight.position.normalize(),
			sunColor: 0xffffff,
			waterColor: 0x001e0f,
			betaVersion: 0,
			side: THREE.DoubleSide
		});
		var mesh = new THREE.Mesh(
			new THREE.PlaneGeometry(2000, 2000, 100, 100),
			this.ms_Water.material
		);
		mesh.add(this.ms_Water);
		mesh.rotation.x = - Math.PI * 0.5;

	},

	render: function(){
		this._water.render();

	},

	update: function(){
		this._water.material.uniforms.time.value += 1.0 / 60.0; // is 60 variable?
	}

});

// fallback
APP.Elements = APP.Elements || {};

// extend APP namespace
APP.Elements.Water = Water;