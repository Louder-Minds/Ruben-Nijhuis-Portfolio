uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

attribute vec3 position;
uniform float uTime;


void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    modelPosition.z += sin(modelPosition.x * 0.1 + uTime) * 0.1;
    modelPosition.z += sin(modelPosition.y * 0.1 + uTime) * 0.1;

    gl_Position = projectedPosition;
}