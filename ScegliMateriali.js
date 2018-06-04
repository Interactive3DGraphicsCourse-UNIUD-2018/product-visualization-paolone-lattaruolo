function scegliMateriali(corpo, cassetti)
{
	//cassetti comprende anche i piedini
	switch(corpo){
		case 'LegnoPino':
			diffuseMap = diffuseMapLegnoPino;
			specularMap = specularMapLegnoPino;
			roughnessMap = roughnessMapLegnoPino;
			normalMap = normalMapLegnoPino;
			aoMap = aoMapLegnoPino;
			uniforms = uniformLegnoPino;
			shaderCorpo ="Texture";
			textureParameters = {
				material:"LegnoPino",
				repeatS: 8.0,
				repeatT: 8.0,
				normalScale: 0.2,
			};
			break;
		case 'LegnoEbano':
			diffuseMap = diffuseMapLegnoEbano;
			specularMap = specularMapLegnoEbano;
			roughnessMap = roughnessMapLegnoEbano;
			normalMap = normalMapLegnoEbano;
			aoMap = aoMapLegnoEbano;
			uniforms = uniformsLengoEbano;
			shaderCorpo ="Texture";
			textureParameters = {
				material:"LegnoEbano",
				repeatS: 3.0,
				repeatT: 3.0,
				normalScale: 0.2,
			};
			break;
		case 'Titanio':
			shaderCorpo ="Materiale";
			materialParameters = materialParametersTitanio;
			break;
		case 'Oro':
			shaderCorpo ="Materiale";
			materialParameters = materialParametersOro;
			break;
		case 'Plastica':
			shaderCorpo ="Materiale";
			materialParameters = materialParametersPlastic;
			break;
		default:
		//legno pino
			diffuseMap = diffuseMapLegnoPino;
			specularMap = specularMapLegnoPino;
			roughnessMap = roughnessMapLegnoPino;
			normalMap = normalMapLegnoPino;
			aoMap = aoMapLegnoPino;
			uniforms = uniformLegnoPino;
			shaderCorpo ="Texture";
			textureParameters = {
				material:"LegnoPino",
				repeatS: 8.0,
				repeatT: 8.0,
				normalScale: 0.2,
			};
	}
	switch (cassetti){
		case  'LegnoPino':
			diffuseMapCassetti = diffuseMapLegnoPino;
			specularMapCassetti = specularMapLegnoPino;
			roughnessMapCassetti = roughnessMapLegnoPino;
			normalMapCassetti = normalMapLegnoPino;
			aoMapCassetti = aoMapLegnoPino;
			uniformsCassetti = uniformLegnoPino;
			shaderCassetti ="Texture";
			textureParametersCassetti = {
				material:"LegnoPino",
				repeatS: 8.0,
				repeatT: 8.0,
				normalScale: 0.2,
			};
			break;
		case 'LegnoEbano':
			diffuseMapCassetti = diffuseMapLegnoEbano;
			specularMapCassetti = specularMapLegnoEbano;
			roughnessMapCassetti = roughnessMapLegnoEbano;
			normalMapCassetti = normalMapLegnoEbano;
			aoMapCassetti = aoMapLegnoEbano;
			uniformsCassetti = uniformsLengoEbano;
			shaderCassetti ="Texture";
			textureParametersCassetti = {
				material:"LegnoEbano",
				repeatS: 3.0,
				repeatT: 3.0,
				normalScale: 0.2,
			};
			break;
		case 'Titanio':
			shaderCassetti ="Materiale";
			materialParametersCassetti = materialParametersTitanio;
			break;
		case  'Oro':
			shaderCassetti ="Materiale";
			materialParametersCassetti = materialParametersOro;
			break;
		case  'Plastica':
			shaderCassetti ="Materiale";
			materialParametersCassetti = materialParametersPlastic;
			break;
		default:
		//legno pino
			diffuseMapCassetti = diffuseMapLegnoPino;
			specularMapCassetti = specularMapLegnoPino;
			roughnessMapCassetti = roughnessMapLegnoPino;
			normalMapCassetti = normalMapLegnoPino;
			aoMapCassetti = aoMapLegnoPino;
			materialParametersCassetti = materialParametersPlastic;
			uniformsCassetti = uniformLegnoPino;
			shaderCassetti ="Texture";
			textureParametersCassetti = {
				material:"LegnoPino",
				repeatS: 8.0,
				repeatT: 8.0,
				normalScale: 0.2,
			};
	}
}
