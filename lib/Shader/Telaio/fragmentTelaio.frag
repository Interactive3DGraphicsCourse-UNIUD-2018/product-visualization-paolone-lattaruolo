varying vec3 vNormal;
varying vec3 vPosition;
uniform vec3 pointLightPosition; // in world space
uniform vec3 pointLightPosition2; // in world space
uniform vec3 clight;
uniform vec3 cspec;
uniform vec3 cdiff;
uniform float roughness;
const float PI = 3.14159;

vec3 FSchlick(float lDoth) {
  return (cspec + (vec3(1.0)-cspec)*pow(1.0 - lDoth,5.0));
}

float DGGX(float nDoth, float alpha) {
  float alpha2 = alpha*alpha;
  float d = nDoth*nDoth*(alpha2-1.0)+1.0;
  return (  alpha2 / (PI*d*d));
}

float G1(float dotProduct, float k) {
  return (dotProduct / (dotProduct*(1.0-k) + k) );
}

float GSmith(float nDotv, float nDotl) {
  float k = roughness*roughness;
  return G1(nDotl,k)*G1(nDotv,k);
}

void main() {

  // Luce 1
  vec4 lPosition = viewMatrix * vec4( pointLightPosition, 1.0 );
  vec3 l = normalize(lPosition.xyz - vPosition.xyz);
  vec3 n = normalize( vNormal );  // interpolation destroys normalization, so we have to normalize
  vec3 v = normalize( -vPosition);
  vec3 h = normalize( v + l);
  // small quantity to prevent divisions by 0
  float nDotl = max(dot( n, l),0.000001);
  float lDoth = max(dot( l , h ),0.000001);
  float nDoth = max(dot( n, h ),0.000001);
  float vDoth = max(dot( v, h ),0.000001);
  float nDotv = max(dot( n, v ),0.000001);
  vec3 fresnel = FSchlick(lDoth);
  vec3 BRDF = (vec3(1.0)-fresnel)*cdiff/PI + fresnel*GSmith(nDotv,nDotl)*DGGX(nDoth,roughness*roughness)/
  (4.0*nDotl*nDotv);

  // Luce 2
    vec4 lPosition2 = viewMatrix * vec4( pointLightPosition2, 1.0 );
    vec3 l2 = normalize(lPosition2.xyz - vPosition.xyz);
    vec3 n2 = normalize( vNormal );  // interpolation destroys normalization, so we have to normalize
    vec3 v2 = normalize( -vPosition );
    vec3 h2 = normalize( v + l2 );
    // small quantity to prevent divisions by 0
    float nDotl2 = max(dot( n2, l2),0.000001);
    float lDoth2 = max(dot( l2 , h2 ),0.000001);
    float nDoth2 = max(dot( n2, h2 ),0.000001);
    float vDoth2 = max(dot( v2, h2 ),0.000001);
    float nDotv2 = max(dot( n2, v2 ),0.000001);
    vec3 fresnel2 = FSchlick(lDoth2);
    vec3 BRDF2 = (vec3(1.0)-fresnel2)*cdiff/PI + fresnel2*GSmith(nDotv2,nDotl2)*DGGX(nDoth2,roughness*roughness)/
    (4.0*nDotl2*nDotv2);


  vec3 outRadiance = PI* clight * (nDotl * BRDF + nDotl2 * BRDF2);
  // gamma encode the final value
  gl_FragColor = vec4(pow( outRadiance, vec3(1.0/2.2)), 1.0);
}
