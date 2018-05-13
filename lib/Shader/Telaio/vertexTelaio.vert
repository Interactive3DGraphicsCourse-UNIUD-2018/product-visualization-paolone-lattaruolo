varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  vec4 vPos = modelViewMatrix * vec4( position, 1.0 );
  vPosition = vPos.xyz;
  vNormal = normalMatrix * normal;
  gl_Position = projectionMatrix * vPos;
}
