varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 uVv;
uniform vec3 pointLightPosition; // in world space
uniform vec3 pointLightPosition2; // in world space
uniform vec3 clight;
uniform sampler2D diffuseMap;
uniform sampler2D roughnessMap;
uniform sampler2D normalMap;
uniform vec2 normalScale;
uniform vec2 textureRepeat;
vec3 cdiff;
vec3 cspec;
float roughness;
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

#extension GL_OES_standard_derivatives : enable

vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {

vec3 q0 = dFdx( eye_pos.xyz );
vec3 q1 = dFdy( eye_pos.xyz );
vec2 st0 = dFdx( uVv.st );
vec2 st1 = dFdy( uVv.st );

vec3 S = normalize(  q0 * st1.t - q1 * st0.t );
vec3 T = normalize( -q0 * st1.s + q1 * st0.s );
vec3 N =  surf_norm ;

vec3 mapN = normalize(texture2D( normalMap, uVv ).xyz * 2.0 - 1.0);
mapN.xy = normalScale * mapN.xy;
mat3 tsn = mat3( S, T, N );
return normalize( tsn * mapN );

}

void main() {
  vec4 lPosition = viewMatrix * vec4( pointLightPosition, 1.0 );
  vec3 l = normalize(lPosition.xyz - vPosition.xyz);
  vec3 n = perturbNormal2Arb( vPosition, normalize( vNormal ));
  vec3 v = normalize( -vPosition);
  vec3 h = normalize( v + l);
  // small quantity to prevent divisions by 0
  float nDotl = max(dot( n, l ),0.000001);
  float lDoth = max(dot( l, h ),0.000001);
  float nDoth = max(dot( n, h ),0.000001);
  float vDoth = max(dot( v, h ),0.000001);
  float nDotv = max(dot( n, v ),0.000001);

  cdiff = texture2D( diffuseMap, uVv*textureRepeat ).rgb;
  // texture in sRGB, linearize
  cdiff = pow( cdiff, vec3(2.2));
  roughness = texture2D( roughnessMap, uVv*textureRepeat).r; // no need to linearize roughness map

  vec3 fresnel = FSchlick(lDoth);
  vec3 BRDF = (vec3(1.0)-fresnel)*cdiff/PI + fresnel*GSmith(nDotv,nDotl)*DGGX(nDoth,roughness*roughness)/
  (4.0*nDotl*nDotv);

  // Luce 2
    vec4 lPosition2 = viewMatrix * vec4( pointLightPosition2, 1.0 );
    vec3 l2 = normalize(lPosition2.xyz - vPosition.xyz);
    vec3 n2 = perturbNormal2Arb( vPosition, normalize( vNormal ));
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
