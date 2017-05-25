/**
 * Created by Ivanfunny on 2017/5/25 0025.
 */
var VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' +
    'void main() {\n' +
    '   gl_Position = a_Position;\n' +
    '}\n';

var FSHADER_SOURCE=
    'void main() {\n' +
    '   gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' +
    '}\n';

function main() {
    //获取canvas标签
    var canvas = document.getElementById("webgl");

    //获取上下文
    var gl = getWebGLContext(canvas);
    if(!gl){
        console.log("Failed to get the rendering context for WebGL");
        return;
    }

    //初始化着色器
    if(!initShaders(gl,VSHADER_SOURCE,FSHADER_SOURCE)){
        console.log("Failed to initialize shaders");
        return;
    }

    //初始化缓冲区
    // var n = initVertexBuffers(gl);
    // if(n<0){
    //     console.log("Failed to set the positions of the vertices");
    //     return;
    // }


    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    gl.clear(gl.COLOR_BUFFER_BIT);


}
//
// function initVertexBuffers(gl) {
//
//     var n;
//     //创建缓冲区
//     var vertexBuffer = gl.createBuffer();
//     if(!vertexBuffer){
//         console.log("Failed to create the buffer object");
//         return -1;
//     }
//
//     //绑定缓冲区
//     gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer);
//     //写入缓冲区
//     gl.bufferData(gl.ARRAY_BUFFER,,gl.STATIC_DRAW);
//
//     //从缓冲区读入数据
//     var a_Position = gl.getAttribLocation(gl.program,'a_Position');
//     if(a_Position<0){
//         console.log("Failed to get the storage location of a_Position");
//         return-1;
//     }
//
//     return n;
// }