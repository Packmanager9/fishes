
window.addEventListener('DOMContentLoaded', (event) => {
    const squaretable = {} // this section of code is an optimization for use of the hypotenuse function on Line and LineOP objects
    for (let t = 0; t < 10000000; t++) {
        squaretable[`${t}`] = Math.sqrt(t)
        if (t > 999) {
            t += 9
        }
    }
    let video_recorder
    let recording = 0
    // function CanvasCaptureToWEBM(canvas, bitrate) {
    //     // the video_recorder is set to  '= new CanvasCaptureToWEBM(canvas, 4500000);' in the setup, 
    //     // it uses the same canvas as the rest of the file.
    //     // to start a recording call .record() on video_recorder
    //     /*
    //     for example, 
    //     if(keysPressed['-'] && recording == 0){
    //         recording = 1
    //         video_recorder.record()
    //     }
    //     if(keysPressed['='] && recording == 1){
    //         recording = 0
    //         video_recorder.stop()
    //         video_recorder.download('File Name As A String.webm')
    //     }
    //     */
    //     this.record = Record
    //     this.stop = Stop
    //     this.download = saveToDownloads
    //     let blobCaptures = []
    //     let outputFormat = {}
    //     let recorder = {}
    //     let canvasInput = canvas.captureStream()
    //     if (typeof canvasInput == undefined || !canvasInput) {
    //         return
    //     }
    //     const video = document.createElement('video')
    //     video.style.display = 'none'

    //     function Record() {
    //         let formats = [
    //             'video/vp8',
    //             "video/webm",
    //             'video/webm,codecs=vp9',
    //             "video/webm\;codecs=vp8",
    //             "video/webm\;codecs=daala",
    //             "video/webm\;codecs=h264",
    //             "video/mpeg"
    //         ];

    //         for (let t = 0; t < formats.length; t++) {
    //             if (MediaRecorder.isTypeSupported(formats[t])) {
    //                 outputFormat = formats[t]
    //                 break
    //             }
    //         }
    //         if (typeof outputFormat != "string") {
    //             return
    //         } else {
    //             let videoSettings = {
    //                 mimeType: outputFormat,
    //                 videoBitsPerSecond: bitrate || 2000000 // 2Mbps
    //             };
    //             blobCaptures = []
    //             try {
    //                 recorder = new MediaRecorder(canvasInput, videoSettings)
    //             } catch (error) {
    //                 return;
    //             }
    //             recorder.onstop = handleStop
    //             recorder.ondataavailable = handleAvailableData
    //             recorder.start(100)
    //         }
    //     }
    //     function handleAvailableData(event) {
    //         if (event.data && event.data.size > 0) {
    //             blobCaptures.push(event.data)
    //         }
    //     }
    //     function handleStop() {
    //         const superBuffer = new Blob(blobCaptures, { type: outputFormat })
    //         video.src = window.URL.createObjectURL(superBuffer)
    //     }
    //     function Stop() {
    //         recorder.stop()
    //         video.controls = true
    //     }
    //     function saveToDownloads(input) { // specifying a file name for the output
    //         const name = input || 'video_out.webm'
    //         const blob = new Blob(blobCaptures, { type: outputFormat })
    //         const url = window.URL.createObjectURL(blob)
    //         const storageElement = document.createElement('a')
    //         storageElement.style.display = 'none'
    //         storageElement.href = url
    //         storageElement.download = name
    //         document.body.appendChild(storageElement)
    //         storageElement.click()
    //         setTimeout(() => {
    //             document.body.removeChild(storageElement)
    //             window.URL.revokeObjectURL(url)
    //         }, 100)
    //     }
    // }
    // const gamepadAPI = {
    //     controller: {},
    //     turbo: true,
    //     connect: function (evt) {
    //         if (navigator.getGamepads()[0] != null) {
    //             gamepadAPI.controller = navigator.getGamepads()[0]
    //             gamepadAPI.turbo = true;
    //         } else if (navigator.getGamepads()[1] != null) {
    //             gamepadAPI.controller = navigator.getGamepads()[0]
    //             gamepadAPI.turbo = true;
    //         } else if (navigator.getGamepads()[2] != null) {
    //             gamepadAPI.controller = navigator.getGamepads()[0]
    //             gamepadAPI.turbo = true;
    //         } else if (navigator.getGamepads()[3] != null) {
    //             gamepadAPI.controller = navigator.getGamepads()[0]
    //             gamepadAPI.turbo = true;
    //         }
    //         for (let i = 0; i < gamepads.length; i++) {
    //             if (gamepads[i] === null) {
    //                 continue;
    //             }
    //             if (!gamepads[i].connected) {
    //                 continue;
    //             }
    //         }
    //     },
    //     disconnect: function (evt) {
    //         gamepadAPI.turbo = false;
    //         delete gamepadAPI.controller;
    //     },
    //     update: function () {
    //         gamepadAPI.controller = navigator.getGamepads()[0]
    //         gamepadAPI.buttonsCache = [];// clear the buttons cache
    //         for (var k = 0; k < gamepadAPI.buttonsStatus.length; k++) {// move the buttons status from the previous frame to the cache
    //             gamepadAPI.buttonsCache[k] = gamepadAPI.buttonsStatus[k];
    //         }
    //         gamepadAPI.buttonsStatus = [];// clear the buttons status
    //         var c = gamepadAPI.controller || {}; // get the gamepad object
    //         var pressed = [];
    //         if (c.buttons) {
    //             for (var b = 0, t = c.buttons.length; b < t; b++) {// loop through buttons and push the pressed ones to the array
    //                 if (c.buttons[b].pressed) {
    //                     pressed.push(gamepadAPI.buttons[b]);
    //                 }
    //             }
    //         }
    //         var axes = [];
    //         if (c.axes) {
    //             for (var a = 0, x = c.axes.length; a < x; a++) {// loop through axes and push their values to the array
    //                 axes.push(c.axes[a].toFixed(2));
    //             }
    //         }
    //         gamepadAPI.axesStatus = axes;// assign received values
    //         gamepadAPI.buttonsStatus = pressed;
    //         // console.log(pressed); // return buttons for debugging purposes
    //         return pressed;
    //     },
    //     buttonPressed: function (button, hold) {
    //         var newPress = false;
    //         for (var i = 0, s = gamepadAPI.buttonsStatus.length; i < s; i++) {// loop through pressed buttons
    //             if (gamepadAPI.buttonsStatus[i] == button) {// if we found the button we're looking for...
    //                 newPress = true;// set the boolean variable to true
    //                 if (!hold) {// if we want to check the single press
    //                     for (var j = 0, p = gamepadAPI.buttonsCache.length; j < p; j++) {// loop through the cached states from the previous frame
    //                         if (gamepadAPI.buttonsCache[j] == button) { // if the button was already pressed, ignore new press
    //                             newPress = false;
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //         return newPress;
    //     },
    //     buttons: [
    //         'A', 'B', 'X', 'Y', 'LB', 'RB', 'Left-Trigger', 'Right-Trigger', 'Back', 'Start', 'Axis-Left', 'Axis-Right', 'DPad-Up', 'DPad-Down', 'DPad-Left', 'DPad-Right', "Power"
    //     ],
    //     buttonsCache: [],
    //     buttonsStatus: [],
    //     axesStatus: []
    // };
    let canvas
    let canvas_context
    let keysPressed = {}
    let FLEX_engine
    let TIP_engine = {}
    let XS_engine
    let YS_engine
    class Point {
        constructor(x, y) {
            this.x = x
            this.y = y
            this.radius = 0
        }
        pointDistance(point) {
            return (new LineOP(this, point, "transparent", 0)).hypotenuse()
        }
    }

    class Vector { // vector math and physics if you prefer this over vector components on circles
        constructor(object = (new Point(0, 0)), xmom = 0, ymom = 0) {
            this.xmom = xmom
            this.ymom = ymom
            this.object = object
        }
        isToward(point) {
            let link = new LineOP(this.object, point)
            let dis1 = link.squareDistance()
            let dummy = new Point(this.object.x + this.xmom, this.object.y + this.ymom)
            let link2 = new LineOP(dummy, point)
            let dis2 = link2.squareDistance()
            if (dis2 < dis1) {
                return true
            } else {
                return false
            }
        }
        rotate(angleGoal) {
            let link = new Line(this.xmom, this.ymom, 0, 0)
            let length = link.hypotenuse()
            let x = (length * Math.cos(angleGoal))
            let y = (length * Math.sin(angleGoal))
            this.xmom = x
            this.ymom = y
        }
        magnitude() {
            return (new Line(this.xmom, this.ymom, 0, 0)).hypotenuse()
        }
        normalize(size = 1) {
            let magnitude = this.magnitude()
            this.xmom /= magnitude
            this.ymom /= magnitude
            this.xmom *= size
            this.ymom *= size
        }
        multiply(vect) {
            let point = new Point(0, 0)
            let end = new Point(this.xmom + vect.xmom, this.ymom + vect.ymom)
            return point.pointDistance(end)
        }
        add(vect) {
            return new Vector(this.object, this.xmom + vect.xmom, this.ymom + vect.ymom)
        }
        subtract(vect) {
            return new Vector(this.object, this.xmom - vect.xmom, this.ymom - vect.ymom)
        }
        divide(vect) {
            return new Vector(this.object, this.xmom / vect.xmom, this.ymom / vect.ymom) //be careful with this, I don't think this is right
        }
        draw() {
            let dummy = new Point(this.object.x + this.xmom, this.object.y + this.ymom)
            let link = new LineOP(this.object, dummy, "#FFFFFF", 1)
            link.draw()
        }
    }
    class Line {
        constructor(x, y, x2, y2, color, width) {
            this.x1 = x
            this.y1 = y
            this.x2 = x2
            this.y2 = y2
            this.color = color
            this.width = width
        }
        angle() {
            return Math.atan2(this.y1 - this.y2, this.x1 - this.x2)
        }
        squareDistance() {
            let xdif = this.x1 - this.x2
            let ydif = this.y1 - this.y2
            let squareDistance = (xdif * xdif) + (ydif * ydif)
            return squareDistance
        }
        hypotenuse() {
            let xdif = this.x1 - this.x2
            let ydif = this.y1 - this.y2
            let hypotenuse = (xdif * xdif) + (ydif * ydif)
            if (hypotenuse < 10000000 - 1) {
                if (hypotenuse > 1000) {
                    return squaretable[`${Math.round(10 * Math.round((hypotenuse * .1)))}`]
                } else {
                    return squaretable[`${Math.round(hypotenuse)}`]
                }
            } else {
                return Math.sqrt(hypotenuse)
            }
        }
        draw() {
            let linewidthstorage = canvas_context.lineWidth
            canvas_context.strokeStyle = this.color
            canvas_context.lineWidth = this.width
            canvas_context.beginPath()
            canvas_context.moveTo(this.x1, this.y1)
            canvas_context.lineTo(this.x2, this.y2)
            canvas_context.stroke()
            canvas_context.lineWidth = linewidthstorage
        }
    }
    class LineOP {
        constructor(object, target, color, width) {
            this.object = object
            this.target = target
            this.color = color
            this.width = width
        }
        intersects(line) {
            console.log(line)
            var det, gm, lm;
            det = (this.target.x - this.object.x) * (line.target.y - line.object.y) - (line.target.x - line.object.x) * (this.target.y - this.object.y);
            if (det === 0) {
                return false;
            } else {
                lm = ((line.target.y - line.object.y) * (line.target.x - this.object.x) + (line.object.x - line.target.x) * (line.target.y - this.object.y)) / det;
                gm = ((this.object.y - this.target.y) * (line.target.x - this.object.x) + (this.target.x - this.object.x) * (line.target.y - this.object.y)) / det;
                return (0 < lm && lm < 1) && (0 < gm && gm < 1);
            }
        }
        squareDistance() {
            let xdif = this.object.x - this.target.x
            let ydif = this.object.y - this.target.y
            let squareDistance = (xdif * xdif) + (ydif * ydif)
            return squareDistance
        }
        hypotenuse() {
            let xdif = this.object.x - this.target.x
            let ydif = this.object.y - this.target.y
            let hypotenuse = (xdif * xdif) + (ydif * ydif)
            if (hypotenuse < 10000000 - 1) {
                if (hypotenuse > 1000) {
                    return squaretable[`${Math.round(10 * Math.round((hypotenuse * .1)))}`]
                } else {
                    return squaretable[`${Math.round(hypotenuse)}`]
                }
            } else {
                return Math.sqrt(hypotenuse)
            }
        }
        angle() {
            return Math.atan2(this.object.y - this.target.y, this.object.x - this.target.x)
        }
        draw() {
            let linewidthstorage = canvas_context.lineWidth
            canvas_context.strokeStyle = this.color
            canvas_context.lineWidth = this.width
            canvas_context.beginPath()
            canvas_context.moveTo(this.object.x, this.object.y)
            canvas_context.lineTo(this.target.x, this.target.y)
            canvas_context.stroke()
            canvas_context.lineWidth = linewidthstorage
        }
    }
    class Rectangle {
        constructor(x, y, width, height, color, fill = 1, stroke = 0, strokeWidth = 1) {
            this.x = x
            this.y = y
            this.height = height
            this.width = width
            this.color = color
            this.xmom = 0
            this.ymom = 0
            this.stroke = stroke
            this.strokeWidth = strokeWidth
            this.fill = fill
        }
        frictiveMove() {
        }
        draw() {
            canvas_context.fillStyle = this.color
            canvas_context.fillRect(this.x, this.y, this.width, this.height)
        }
        move() {
            this.x += this.xmom
            this.y += this.ymom
        }
        isPointInside(point) {
            if (point.x >= this.x) {
                if (point.y >= this.y) {
                    if (point.x <= this.x + this.width) {
                        if (point.y <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
        doesPerimeterTouch(point) {
            if (point.x + point.radius >= this.x) {
                if (point.y + point.radius >= this.y) {
                    if (point.x - point.radius <= this.x + this.width) {
                        if (point.y - point.radius <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
    }
    class Circle {
        constructor(x, y, radius, color, xmom = 0, ymom = 0, friction = 1, reflect = 0, strokeWidth = 0, strokeColor = "transparent") {
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
            this.friction = friction
            this.reflect = reflect
            this.strokeWidth = strokeWidth
            this.strokeColor = strokeColor
        }
        draw() {
            canvas_context.lineWidth = this.strokeWidth
            canvas_context.strokeStyle = this.color
            canvas_context.beginPath();
            if (this.radius > 0) {
                canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)
                canvas_context.fillStyle = this.color
                canvas_context.fill()
                canvas_context.stroke();
            } else {
                // console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
            }
        }
        move() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x += this.xmom
            this.y += this.ymom
        }
        unmove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x -= this.xmom
            this.y -= this.ymom
        }
        frictiveMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        // this.ymom *= -1
                        this.ymom *= -.1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x += this.xmom
            this.y += this.ymom
            this.xmom *= this.friction
            this.ymom *= this.friction
        }
        frictiveunMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.xmom /= this.friction
            this.ymom /= this.friction
            this.x -= this.xmom
            this.y -= this.ymom
        }
        isPointInside(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius * this.radius)) {
                return true
            }
            return false
        }
        doesPerimeterTouch(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= ((this.radius + point.radius) * (this.radius + point.radius))) {
                return true
            }
            return false
        }
    }
    class Polygon {
        constructor(x, y, size, color, sides = 3, xmom = 0, ymom = 0, angle = 0, reflect = 0) {
            if (sides < 2) {
                sides = 2
            }
            this.reflect = reflect
            this.xmom = xmom
            this.ymom = ymom
            this.body = new Circle(x, y, size - (size * .293), "transparent")
            this.nodes = []
            this.angle = angle
            this.size = size
            this.color = color
            this.angleIncrement = (Math.PI * 2) / sides
            this.sides = sides
            for (let t = 0; t < sides; t++) {
                let node = new Circle(this.body.x + (this.size * (Math.cos(this.angle))), this.body.y + (this.size * (Math.sin(this.angle))), 0, "transparent")
                this.nodes.push(node)
                this.angle += this.angleIncrement
            }
        }
        isPointInside(point) { // rough approximation
            this.body.radius = this.size - (this.size * .293)
            if (this.sides <= 2) {
                return false
            }
            this.areaY = point.y - this.body.y
            this.areaX = point.x - this.body.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.body.radius * this.body.radius)) {
                return true
            }
            return false
        }
        move() {
            if (this.reflect == 1) {
                if (this.body.x > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.body.y > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.body.x < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.body.y < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.body.x += this.xmom
            this.body.y += this.ymom
        }
        draw() {
            this.nodes = []
            this.angleIncrement = (Math.PI * 2) / this.sides
            this.body.radius = this.size - (this.size * .293)
            for (let t = 0; t < this.sides; t++) {
                let node = new Circle(this.body.x + (this.size * (Math.cos(this.angle))), this.body.y + (this.size * (Math.sin(this.angle))), 0, "transparent")
                this.nodes.push(node)
                this.angle += this.angleIncrement
            }
            canvas_context.strokeStyle = this.color
            canvas_context.fillStyle = this.color
            canvas_context.lineWidth = 0
            canvas_context.beginPath()
            canvas_context.moveTo(this.nodes[0].x, this.nodes[0].y)
            for (let t = 1; t < this.nodes.length; t++) {
                canvas_context.lineTo(this.nodes[t].x, this.nodes[t].y)
            }
            canvas_context.lineTo(this.nodes[0].x, this.nodes[0].y)
            canvas_context.fill()
            canvas_context.stroke()
            canvas_context.closePath()
        }
    }
    class Shape {
        constructor(shapes) {
            this.shapes = shapes
        }
        draw() {
            for (let t = 0; t < this.shapes.length; t++) {
                this.shapes[t].draw()
            }
        }
        move() {
            if (typeof this.xmom != "number") {
                this.xmom = 0
            }
            if (typeof this.ymom != "number") {
                this.ymom = 0
            }
            for (let t = 0; t < this.shapes.length; t++) {
                this.shapes[t].x += this.xmom
                this.shapes[t].y += this.ymom
                this.shapes[t].draw()
            }
        }
        isPointInside(point) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (this.shapes[t].isPointInside(point)) {
                    return true
                }
            }
            return false
        }
        doesPerimeterTouch(point) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (this.shapes[t].doesPerimeterTouch(point)) {
                    return true
                }
            }
            return false
        }
        innerShape(point) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (this.shapes[t].doesPerimeterTouch(point)) {
                    return this.shapes[t]
                }
            }
            return false
        }
        isInsideOf(box) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (box.isPointInside(this.shapes[t])) {
                    return true
                }
            }
            return false
        }
        adjustByFromDisplacement(x, y) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (typeof this.shapes[t].fromRatio == "number") {
                    this.shapes[t].x += x * this.shapes[t].fromRatio
                    this.shapes[t].y += y * this.shapes[t].fromRatio
                }
            }
        }
        adjustByToDisplacement(x, y) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (typeof this.shapes[t].toRatio == "number") {
                    this.shapes[t].x += x * this.shapes[t].toRatio
                    this.shapes[t].y += y * this.shapes[t].toRatio
                }
            }
        }
        mixIn(arr) {
            for (let t = 0; t < arr.length; t++) {
                for (let k = 0; k < arr[t].shapes.length; k++) {
                    this.shapes.push(arr[t].shapes[k])
                }
            }
        }
        push(object) {
            this.shapes.push(object)
        }
    }

    class Spring {
        constructor(x, y, radius, color, body = 0, length = 1, gravity = 0, width = 1) {
            if (body == 0) {
                this.body = new Circle(x, y, radius, color)
                this.anchor = new Circle(x, y, radius, color)
                this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", width)
                this.length = length
            } else {
                this.body = body
                this.anchor = new Circle(x, y, radius, color)
                this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", width)
                this.length = length
            }
            this.gravity = gravity
            this.width = width
        }
        balance() {
            this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", this.width)
            if (this.beam.hypotenuse() < this.length) {
                this.body.xmom += (this.body.x - this.anchor.x) / this.length
                this.body.ymom += (this.body.y - this.anchor.y) / this.length
                this.anchor.xmom -= (this.body.x - this.anchor.x) / this.length
                this.anchor.ymom -= (this.body.y - this.anchor.y) / this.length
            } else {
                this.body.xmom -= (this.body.x - this.anchor.x) / this.length
                this.body.ymom -= (this.body.y - this.anchor.y) / this.length
                this.anchor.xmom += (this.body.x - this.anchor.x) / this.length
                this.anchor.ymom += (this.body.y - this.anchor.y) / this.length
            }
            let xmomentumaverage = (this.body.xmom + this.anchor.xmom) / 2
            let ymomentumaverage = (this.body.ymom + this.anchor.ymom) / 2
            this.body.xmom = (this.body.xmom + xmomentumaverage) / 2
            this.body.ymom = (this.body.ymom + ymomentumaverage) / 2
            this.anchor.xmom = (this.anchor.xmom + xmomentumaverage) / 2
            this.anchor.ymom = (this.anchor.ymom + ymomentumaverage) / 2
        }
        draw() {
            this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", this.width)
            this.beam.draw()
            this.body.draw()
            this.anchor.draw()
        }
        move() {
            this.anchor.ymom += this.gravity
            this.anchor.move()
        }

    }
    class SpringOP {
        constructor(body, anchor, length, width = 3, color = body.color) {
            this.body = body
            this.anchor = anchor
            this.beam = new LineOP(body, anchor, color, width)
            this.length = length
        }
        balance() {
            if (this.beam.hypotenuse() < this.length) {
                this.body.xmom += ((this.body.x - this.anchor.x) / this.length)
                this.body.ymom += ((this.body.y - this.anchor.y) / this.length)
                this.anchor.xmom -= ((this.body.x - this.anchor.x) / this.length)
                this.anchor.ymom -= ((this.body.y - this.anchor.y) / this.length)
            } else if (this.beam.hypotenuse() > this.length) {
                this.body.xmom -= (this.body.x - this.anchor.x) / (this.length) * 1.6
                this.body.ymom -= (this.body.y - this.anchor.y) / (this.length) * 1.6
                this.anchor.xmom += (this.body.x - this.anchor.x) / (this.length) * 1.6
                this.anchor.ymom += (this.body.y - this.anchor.y) / (this.length) * 1.6
            }

            let xmomentumaverage = (this.body.xmom + this.anchor.xmom) / 2
            let ymomentumaverage = (this.body.ymom + this.anchor.ymom) / 2
            this.body.xmom = (this.body.xmom + xmomentumaverage) / 2
            this.body.ymom = (this.body.ymom + ymomentumaverage) / 2
            this.anchor.xmom = (this.anchor.xmom + xmomentumaverage) / 2
            this.anchor.ymom = (this.anchor.ymom + ymomentumaverage) / 2
        }
        draw() {
            this.beam.draw()
        }
        move() {
            //movement of SpringOP objects should be handled separate from their linkage, to allow for many connections, balance here with this object, move nodes independently
        }
    }

    class Color {
        constructor(baseColor, red = -1, green = -1, blue = -1, alpha = 1) {
            this.hue = baseColor
            if (red != -1 && green != -1 && blue != -1) {
                this.r = red
                this.g = green
                this.b = blue
                if (alpha != 1) {
                    if (alpha < 1) {
                        this.alpha = alpha
                    } else {
                        this.alpha = alpha / 255
                        if (this.alpha > 1) {
                            this.alpha = 1
                        }
                    }
                }
                if (this.r > 255) {
                    this.r = 255
                }
                if (this.g > 255) {
                    this.g = 255
                }
                if (this.b > 255) {
                    this.b = 255
                }
                if (this.r < 0) {
                    this.r = 0
                }
                if (this.g < 0) {
                    this.g = 0
                }
                if (this.b < 0) {
                    this.b = 0
                }
            } else {
                this.r = 0
                this.g = 0
                this.b = 0
            }
        }
        normalize() {
            if (this.r > 255) {
                this.r = 255
            }
            if (this.g > 255) {
                this.g = 255
            }
            if (this.b > 255) {
                this.b = 255
            }
            if (this.r < 0) {
                this.r = 0
            }
            if (this.g < 0) {
                this.g = 0
            }
            if (this.b < 0) {
                this.b = 0
            }
        }
        randomLight() {
            var letters = '0123456789ABCDEF';
            var hash = '#';
            for (var i = 0; i < 6; i++) {
                hash += letters[(Math.floor(Math.random() * 12) + 4)];
            }
            var color = new Color(hash, 55 + Math.random() * 200, 55 + Math.random() * 200, 55 + Math.random() * 200)
            return color;
        }
        randomDark() {
            var letters = '0123456789ABCDEF';
            var hash = '#';
            for (var i = 0; i < 6; i++) {
                hash += letters[(Math.floor(Math.random() * 12))];
            }
            var color = new Color(hash, Math.random() * 200, Math.random() * 200, Math.random() * 200)
            return color;
        }
        random() {
            var letters = '0123456789ABCDEF';
            var hash = '#';
            for (var i = 0; i < 6; i++) {
                hash += letters[(Math.floor(Math.random() * 16))];
            }
            var color = new Color(hash, Math.random() * 255, Math.random() * 255, Math.random() * 255)
            return color;
        }
    }
    class Softbody { //buggy, spins in place
        constructor(x, y, radius, color, members = 10, memberLength = 5, force = 10, gravity = 0) {
            this.springs = []
            this.pin = new Circle(x, y, radius, color)
            this.spring = new Spring(x, y, radius, color, this.pin, memberLength, gravity)
            this.springs.push(this.spring)
            for (let k = 0; k < members; k++) {
                this.spring = new Spring(x, y, radius, color, this.spring.anchor, memberLength, gravity)
                if (k < members - 1) {
                    this.springs.push(this.spring)
                } else {
                    this.spring.anchor = this.pin
                    this.springs.push(this.spring)
                }
            }
            this.forceConstant = force
            this.centroid = new Point(0, 0)
        }
        circularize() {
            this.xpoint = 0
            this.ypoint = 0
            for (let s = 0; s < this.springs.length; s++) {
                this.xpoint += (this.springs[s].anchor.x / this.springs.length)
                this.ypoint += (this.springs[s].anchor.y / this.springs.length)
            }
            this.centroid.x = this.xpoint
            this.centroid.y = this.ypoint
            this.angle = 0
            this.angleIncrement = (Math.PI * 2) / this.springs.length
            for (let t = 0; t < this.springs.length; t++) {
                this.springs[t].body.x = this.centroid.x + (Math.cos(this.angle) * this.forceConstant)
                this.springs[t].body.y = this.centroid.y + (Math.sin(this.angle) * this.forceConstant)
                this.angle += this.angleIncrement
            }
        }
        balance() {
            for (let s = this.springs.length - 1; s >= 0; s--) {
                this.springs[s].balance()
            }
            this.xpoint = 0
            this.ypoint = 0
            for (let s = 0; s < this.springs.length; s++) {
                this.xpoint += (this.springs[s].anchor.x / this.springs.length)
                this.ypoint += (this.springs[s].anchor.y / this.springs.length)
            }
            this.centroid.x = this.xpoint
            this.centroid.y = this.ypoint
            for (let s = 0; s < this.springs.length; s++) {
                this.link = new Line(this.centroid.x, this.centroid.y, this.springs[s].anchor.x, this.springs[s].anchor.y, 0, "transparent")
                if (this.link.hypotenuse() != 0) {
                    this.springs[s].anchor.xmom += (((this.springs[s].anchor.x - this.centroid.x) / (this.link.hypotenuse()))) * this.forceConstant
                    this.springs[s].anchor.ymom += (((this.springs[s].anchor.y - this.centroid.y) / (this.link.hypotenuse()))) * this.forceConstant
                }
            }
            for (let s = 0; s < this.springs.length; s++) {
                this.springs[s].move()
            }
            for (let s = 0; s < this.springs.length; s++) {
                this.springs[s].draw()
            }
        }
    }
    class Observer {
        constructor(x, y, radius, color, range = 100, rays = 10, angle = (Math.PI * .125)) {
            this.body = new Circle(x, y, radius, color)
            this.color = color
            this.ray = []
            this.rayrange = range
            this.globalangle = Math.PI
            this.gapangle = angle
            this.currentangle = 0
            this.obstacles = []
            this.raymake = rays
        }
        beam() {
            this.currentangle = this.gapangle / 2
            for (let k = 0; k < this.raymake; k++) {
                this.currentangle += (this.gapangle / Math.ceil(this.raymake / 2))
                let ray = new Circle(this.body.x, this.body.y, 1, "white", (((Math.cos(this.globalangle + this.currentangle)))), (((Math.sin(this.globalangle + this.currentangle)))))
                ray.collided = 0
                ray.lifespan = this.rayrange - 1
                this.ray.push(ray)
            }
            for (let f = 0; f < this.rayrange; f++) {
                for (let t = 0; t < this.ray.length; t++) {
                    if (this.ray[t].collided < 1) {
                        this.ray[t].move()
                        for (let q = 0; q < this.obstacles.length; q++) {
                            if (this.obstacles[q].isPointInside(this.ray[t])) {
                                this.ray[t].collided = 1
                            }
                        }
                    }
                }
            }
        }
        draw() {
            this.beam()
            this.body.draw()
            canvas_context.lineWidth = 1
            canvas_context.fillStyle = this.color
            canvas_context.strokeStyle = this.color
            canvas_context.beginPath()
            canvas_context.moveTo(this.body.x, this.body.y)
            for (let y = 0; y < this.ray.length; y++) {
                canvas_context.lineTo(this.ray[y].x, this.ray[y].y)
                canvas_context.lineTo(this.body.x, this.body.y)
            }
            canvas_context.stroke()
            canvas_context.fill()
            this.ray = []
        }
    }
    function setUp(canvas_pass, style = "#000000") {
        canvas = canvas_pass
        // video_recorder = new CanvasCaptureToWEBM(canvas, 4500000);
        canvas_context = canvas.getContext('2d');
        canvas.style.background = style
        window.setInterval(function () {
            main()
        }, 25)
        document.addEventListener('keydown', (event) => {
            keysPressed[event.key] = true;
        });
        document.addEventListener('keyup', (event) => {
            delete keysPressed[event.key];
        });
        window.addEventListener('pointerdown', e => {
            FLEX_engine = canvas.getBoundingClientRect();
            XS_engine = e.clientX - FLEX_engine.left;
            YS_engine = e.clientY - FLEX_engine.top;
            TIP_engine.x = XS_engine
            TIP_engine.y = YS_engine
            TIP_engine.body = TIP_engine
            // example usage: if(object.isPointInside(TIP_engine)){ take action }
            window.addEventListener('pointermove', continued_stimuli);


            if (fish.past - Date.now() < -180000) {
                fish = new Fishing()
                return
            } else {
            }


        });
        window.addEventListener('pointerup', e => {
            window.removeEventListener("pointermove", continued_stimuli);
        })
        function continued_stimuli(e) {
            FLEX_engine = canvas.getBoundingClientRect();
            XS_engine = e.clientX - FLEX_engine.left;
            YS_engine = e.clientY - FLEX_engine.top;
            TIP_engine.x = XS_engine
            TIP_engine.y = YS_engine
            TIP_engine.body = TIP_engine
        }
    }
    // function gamepad_control(object, speed = 1) { // basic control for objects using the controler
    //     //         console.log(gamepadAPI.axesStatus[1]*gamepadAPI.axesStatus[0]) //debugging
    //     if (typeof object.body != 'undefined') {
    //         if (typeof (gamepadAPI.axesStatus[1]) != 'undefined') {
    //             if (typeof (gamepadAPI.axesStatus[0]) != 'undefined') {
    //                 object.body.x += (gamepadAPI.axesStatus[0] * speed)
    //                 object.body.y += (gamepadAPI.axesStatus[1] * speed)
    //             }
    //         }
    //     } else if (typeof object != 'undefined') {
    //         if (typeof (gamepadAPI.axesStatus[1]) != 'undefined') {
    //             if (typeof (gamepadAPI.axesStatus[0]) != 'undefined') {
    //                 object.x += (gamepadAPI.axesStatus[0] * speed)
    //                 object.y += (gamepadAPI.axesStatus[1] * speed)
    //             }
    //         }
    //     }
    // }
    function control(object, speed = 1) { // basic control for objects
        if (typeof object.body != 'undefined') {
            if (keysPressed['w']) {
                object.body.y -= speed
            }
            if (keysPressed['d']) {
                object.body.x += speed
            }
            if (keysPressed['s']) {
                object.body.y += speed
            }
            if (keysPressed['a']) {
                object.body.x -= speed
            }
        } else if (typeof object != 'undefined') {
            if (keysPressed['w']) {
                object.y -= speed
            }
            if (keysPressed['d']) {
                object.x += speed
            }
            if (keysPressed['s']) {
                object.y += speed
            }
            if (keysPressed['a']) {
                object.x -= speed
            }
        }
    }
    function getRandomLightColor() { // random color that will be visible on  black background
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[(Math.floor(Math.random() * 12) + 4)];
        }
        return color;
    }
    function getRandomColor() { // random color
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[(Math.floor(Math.random() * 16) + 0)];
        }
        return color;
    }
    function getRandomDarkColor() {// color that will be visible on a black background
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[(Math.floor(Math.random() * 12))];
        }
        return color;
    }
    function castBetween(from, to, granularity = 10, radius = 1) { //creates a sort of beam hitbox between two points, with a granularity (number of members over distance), with a radius defined as well
        let limit = granularity
        let shape_array = []
        for (let t = 0; t < limit; t++) {
            let circ = new Circle((from.x * (t / limit)) + (to.x * ((limit - t) / limit)), (from.y * (t / limit)) + (to.y * ((limit - t) / limit)), radius, "red")
            circ.toRatio = t / limit
            circ.fromRatio = (limit - t) / limit
            shape_array.push(circ)
        }
        return (new Shape(shape_array))
    }

    function castBetweenPoints(from, to, granularity = 10, radius = 1) { //creates a sort of beam hitbox between two points, with a granularity (number of members over distance), with a radius defined as well
        let limit = granularity
        let shape_array = []
        for (let t = 0; t < limit; t++) {
            let circ = new Circle((from.x * (t / limit)) + (to.x * ((limit - t) / limit)), (from.y * (t / limit)) + (to.y * ((limit - t) / limit)), radius, "red")
            circ.toRatio = t / limit
            circ.fromRatio = (limit - t) / limit
            shape_array.push(circ)
        }
        return shape_array
    }

    class Disang {
        constructor(dis, ang) {
            this.dis = dis
            this.angle = ang
        }
    }

    class BezierHitbox {
        constructor(x, y, cx, cy, ex, ey, color = "red") { // this function takes a starting x,y, a control point x,y, and a end point x,y
            this.color = color
            this.x = x
            this.y = y
            this.cx = cx
            this.cy = cy
            this.ex = ex
            this.ey = ey
            this.metapoint = new Circle((x + cx + ex) / 3, (y + cy + ey) / 3, 3, "#FFFFFF")
            this.granularity = 100
            this.body = [...castBetweenPoints((new Point(this.x, this.y)), (new Point(this.ex, this.ey)), this.granularity, 0)]

            let angle = (new Line(this.x, this.y, this.ex, this.ey)).angle()

            this.angles = []
            for (let t = 0; t < this.granularity; t++) {
                this.angles.push(angle)
            }
            for (let t = 0; t <= 1; t += 1 / this.granularity) {
                this.body.push(this.getQuadraticXY(t))
                this.angles.push(this.getQuadraticAngle(t))
            }
            this.hitbox = []
            for (let t = 0; t < this.body.length; t++) {
                let link = new LineOP(this.body[t], this.metapoint)
                let disang = new Disang(link.hypotenuse(), link.angle() + (Math.PI * 2))
                this.hitbox.push(disang)
            }
            this.constructed = 1
        }
        isPointInside(point) {
            let link = new LineOP(point, this.metapoint)
            let angle = (link.angle() + (Math.PI * 2))
            let dis = link.hypotenuse()
            for (let t = 1; t < this.hitbox.length; t++) {
                if (Math.abs(this.hitbox[t].angle - this.hitbox[t - 1].angle) > 1) {
                    continue
                }
                if (angle.between(this.hitbox[t].angle, this.hitbox[t - 1].angle)) {
                    if (dis < (this.hitbox[t].dis + this.hitbox[t - 1].dis) * .5) {
                        return true
                    }
                }
            }
            return false
        }
        doesPerimeterTouch(point) {
            let link = new LineOP(point, this.metapoint)
            let angle = (link.angle() + (Math.PI * 2))
            let dis = link.hypotenuse()
            for (let t = 1; t < this.hitbox.length; t++) {
                if (Math.abs(this.hitbox[t].angle - this.hitbox[t - 1].angle) > 1) {
                    continue
                }
                if (angle.between(this.hitbox[t].angle, this.hitbox[t - 1].angle)) {
                    if (dis < ((this.hitbox[t].dis + this.hitbox[t - 1].dis) * .5) + point.radius) {
                        return this.angles[t]
                    }
                }
            }
            return false
        }
        draw() {
            this.metapoint.draw()
            let tline = new Line(this.x, this.y, this.ex, this.ey, this.color, 3)
            tline.draw()
            canvas_context.beginPath()
            this.median = new Point((this.x + this.ex) * .5, (this.y + this.ey) * .5)
            let angle = (new LineOP(this.median, this.metapoint)).angle()
            let dis = (new LineOP(this.median, this.metapoint)).hypotenuse()
            canvas_context.bezierCurveTo(this.x, this.y, this.cx - (Math.cos(angle) * dis * .38), this.cy - (Math.sin(angle) * dis * .38), this.ex, this.ey)

            canvas_context.fillStyle = this.color
            canvas_context.strokeStyle = this.color
            canvas_context.lineWidth = 3
            canvas_context.stroke()
        }
        getQuadraticXY(t) {
            return new Point((((1 - t) * (1 - t)) * this.x) + (2 * (1 - t) * t * this.cx) + (t * t * this.ex), (((1 - t) * (1 - t)) * this.y) + (2 * (1 - t) * t * this.cy) + (t * t * this.ey))
        }
        getQuadraticAngle(t) {
            var dx = 2 * (1 - t) * (this.cx - this.x) + 2 * t * (this.ex - this.cx);
            var dy = 2 * (1 - t) * (this.cy - this.y) + 2 * t * (this.ey - this.cy);
            return -Math.atan2(dx, dy) + 0.5 * Math.PI;
        }
    }
    Number.prototype.between = function (a, b, inclusive) {
        var min = Math.min(a, b),
            max = Math.max(a, b);
        return inclusive ? this >= min && this <= max : this > min && this < max;
    }


    let setup_canvas = document.getElementById('canvas') //getting canvas from document

    setUp(setup_canvas) // setting up canvas refrences, starting timer. 

    // object instantiation and creation happens here 


    class BitSmasher {
        constructor(input) {
            this.input = input
            this.sets = []
            let facinp = input.length
            let facinp2 = input.length - 1
            while (facinp2 > 0) {
                facinp *= facinp2
                facinp2 -= 1
            }
            while (this.sets.length < (facinp)) {
                let kset = []
                while (kset.length < input.length) {
                    let int = Math.floor(Math.random() * input.length)
                    if (kset.includes(int)) {
                    } else {
                        kset.push(int)
                    }
                }
                if (this.sets.includes(kset)) {
                } else {
                    this.sets.push(kset)
                }
            }
            console.log(this)
        }
        act() {
            this.wset = []
            for (let t = 0; t < this.sets.length; t++) {
                let out = []
                for (let k = 0; k < this.sets[t].length; k++) {
                    this.wset.push(this.input[this.sets[t][k]])
                }
                // this.wset.push(out)
            }
            console.log(this.wset)
        }
    }

    // let bs = new BitSmasher(["A", "B", "C", "D", "E", "F", "G"])

    let cfl = new Image()
    cfl.src = "cfl2.png"
    let cfr = new Image()
    cfr.src = "cfr2.png"

    let afl = new Image()
    afl.src = "afl.png"
    let afr = new Image()
    afr.src = "afr.png"

    // let sfl = new Image()
    // sfl.src = "sfl.png"
    // let sfr = new Image()
    // sfr.src = "sfr.png"

    let gpl = new Image()
    gpl.src = "gpl.png"
    let gpr = new Image()
    gpr.src = "gpr.png"


    let fishsong = new Audio()
    fishsong.src = "fishsong.mp3"

    let sfl = new Image()
    sfl.src = "sflx.png"
    let sfr = new Image()
    sfr.src = "sfrx.png"

    let l1fl = new Image()
    l1fl.src = "l1fl.png"
    let l1fr = new Image()
    l1fr.src = "l1fr.png"



    let l2fl = new Image()
    l2fl.src = "l2fl.png"
    let l2fr = new Image()
    l2fr.src = "l2fr.png"


    let crafe = new Image()
    crafe.src = "crafe.png"
    let crafel = new Image()
    crafel.src = "crafel.png"


    class Crafe {
        constructor(x, y, type) {
            this.dir = Math.floor(Math.random() * 2)
            this.body = new Circle(-48 + (this.dir * 1400), 706, 16, getRandomColor())
            this.xmom = (Math.random() - .5) * 15
            this.ymom = (Math.random() - .5) * 15
            this.sxmom = (Math.random() - .5) * 15
            this.symom = (Math.random() - .5) * 15
            this.frame = 0
            this.ang = Math.random() * 6.28
            this.type = Math.floor(Math.random() * 4)
            this.layer =0 
            // this.layer = Math.floor(Math.random() * 3)
            // if(Math.random()< .25){
            //     this.layer++
            // }
            // if(Math.random()< .25){
            //     this.layer++
            // }
            this.type = -4
            this.layer = -4
            // if (this.type == 0) {
            //     this.frame %= 23
            if (this.layer == 0) {
                this.respond = [-1]
            } else {
                this.respond = [this.type]
            }
            // } else if (this.type == 1) {
            //     this.frame %= 18
            //     this.respond = [-1]
            // } else if (this.type == 2) {
            //     this.respond = [0, 1]
            // } else if (this.type == 3) {
            //     this.respond = [2]
            // }
            this.playOut = 0
        }
        draw() {
            if(this.hooked != 1){
                if(this.body.y < 706){
                    this.body.y++
                }
                if(this.body.y < 706){
                    this.body.y++
                }
                if(this.body.y < 706){
                    this.body.y++
                }
                if(this.body.y < 706){
                    this.body.y++
                }
                if(this.body.y < 706){
                    this.body.y++
                }
                if(this.body.y < 706){
                    this.body.y++
                }
                if(this.body.y < 706){
                    this.body.y++
                }
                if(this.body.y < 706){
                    this.body.y++
                }
                if(this.body.y < 706){
                    this.body.y++
                }
                if(this.body.y < 706){
                    this.body.y++
                }
            }
            if (keysPressed['x']) {
                this.hooked = 0
                this.unhooked = 10
            }
            this.playOut -= .29
            this.playOut *= .97
            if (this.playOut < -5) {
                this.playOut = -5
            }
            if (this.hooked == 1) {
                this.body.x = fish.rope[fish.rope.length - 1].anchor.x//+this.xmom
                this.body.y = fish.rope[fish.rope.length - 1].anchor.y //+this.ymom
                if (Math.random() < .015) {
                    if (Math.random() < .15 && this.playOut <= -3) {
                        if (fish.reeltime <= 0) {
                            fish.reel--
                            fish.reeltime = 10
                            if (fish.reel <= 0) {
                                fish.reel = 0
                            }
                        }
                    }
                    if (this.type < 2) {
                        fish.rope[fish.rope.length - 1].anchor.ymom += this.symom * 2
                        fish.rope[fish.rope.length - 1].anchor.xmom += this.sxmom * 2
                    } else {

                        fish.rope[fish.rope.length - 1].anchor.ymom += this.symom * 4
                        fish.rope[fish.rope.length - 1].anchor.xmom += this.sxmom * 4
                    }
                    this.sxmom = (Math.random() - .5) * 15
                    this.symom = (Math.random() - .5) * 15
                }
            }
            if (this.hooked == 1) {
            } else {
                this.body.x += ((this.dir - .5) * -2.5) * (1 + (Math.abs(this.layer )* .2))*2.5
                this.body.x -= (Math.cos(fish.tide) / 1)*1.1
            }
            // this.body.draw()
            // this.frame++
            if (this.type == 0) {
                this.frame %= 23
            } else if (this.type == 1) {
                this.frame %= 18

            } else if (this.type == 2) {
                this.frame %= 22

            } else if (this.type == 3) {
                this.frame %= 54

            }
            this.ang = 0
            for (let t = Math.max(fish.rope.length - 30, fish.reel); t < fish.rope.length - 1; t++) {
                this.ang += ((0) + (fish.rope[t].beam.angle())) / (Math.max(fish.rope.length - 30, fish.reel) - (fish.rope.length - 1))
            }
            this.xmom = ((Math.cos(this.ang) * this.body.radius)) * 1
            this.ymom = ((Math.sin(this.ang) * this.body.radius)) * 1

            if (this.dir == 0) {

                if (this.hooked == 1) {
                    canvas_context.translate(this.body.x, this.body.y)
                    canvas_context.rotate(-this.ang)
                    canvas_context.translate(-this.body.x, -this.body.y)
                    canvas_context.drawImage(crafel, 0 * 96, 0, 96, 96, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)

                }else{
                    canvas_context.drawImage(crafe, 0 * 96, 0, 96, 96, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)

                }
     
                if (this.hooked == 1) {
                    canvas_context.translate(this.body.x, this.body.y)
                    canvas_context.rotate(this.ang)
                    canvas_context.translate(-this.body.x, -this.body.y)
                }

            } else {


                if (this.hooked == 1) {
                    canvas_context.translate(this.body.x, this.body.y)
                    canvas_context.rotate(-this.ang)
                    canvas_context.translate(-this.body.x, -this.body.y)

                    canvas_context.drawImage(crafel, 0 * 96, 0, 96, 96, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)

                }else{
                    canvas_context.drawImage(crafe, 0 * 96, 0, 96, 96, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)

                }
     

                if (this.hooked == 1) {
                    canvas_context.translate(this.body.x, this.body.y)
                    canvas_context.rotate(this.ang)
                    canvas_context.translate(-this.body.x, -this.body.y)
                }


            }

            fish.rope[fish.rope.length - 1].anchor.radius = 4
            if (this.layer < 1) {
                this.body.radius = 12
            } else {
                this.body.radius = 18
            }

            let sumout = 0
            let baits = [[-1, -5]]
            for (let t = 0; t < fish.fish.length; t++) {
                if (fish.fish[t].hooked == 1) {
                    baits.push([fish.fish[t].type, fish.fish[t].layer])
                }
            }
            let bo = 0
            if (this.hooked != 1) {

                if (fish.rope[fish.rope.length - 1].anchor.doesPerimeterTouch(this.body)) {
                    for (let k = 0; k < baits.length; k++) {
                        if (bo == 1) {
                            // continue
                        }
                        // if (this.respond.includes(baits[k][0]) && baits[k][1] == this.layer-1) {
                            if (baits[k][0] == -1) {
                                if (!this.unhooked > 0) {

                                    this.hooked = 1
                                } else {

                                    this.unhooked--
                                }
                                break
                            } else {
                                for (let t = 0; t < fish.fish.length; t++) {

                                    if (fish.fish[t].type == baits[k][0] && fish.fish[t].hooked == 1) {
                                        // fish.fish[t].marked = 1
                                        if (!this.unhooked > 0) {

                                            this.hooked = 1
                                        } else {

                                            this.unhooked--
                                        }
                                        bo = 1
                                        // break
                                    }
                                }

                            }
                        // }
                    }
                }
            } if (this.layer < 1) {
                this.body.radius = 16
            } else {
                this.body.radius = 24
            }
        }
    }

    class Fisk {
        constructor(x, y, type) {
            this.dir = Math.floor(Math.random() * 2)
            this.body = new Circle(-48 + (this.dir * 1400), 140 + (Math.random() * 570), 16, getRandomColor())
            this.xmom = (Math.random() - .5) * 15
            this.ymom = (Math.random() - .5) * 15
            this.sxmom = (Math.random() - .5) * 15
            this.symom = (Math.random() - .5) * 15
            this.frame = 0
            this.ang = Math.random() * 6.28
            this.type = Math.floor(Math.random() * 4)
            this.layer =0 
            // this.layer = Math.floor(Math.random() * 3)
            if(Math.random()< .25){
                this.layer++
                if(Math.random()< .25){
                    this.layer++
                }
            }
            // if (this.type == 0) {
            //     this.frame %= 23
            if (this.layer == 0) {
                this.respond = [-1]
            } else {
                this.respond = [this.type]
            }
            // } else if (this.type == 1) {
            //     this.frame %= 18
            //     this.respond = [-1]
            // } else if (this.type == 2) {
            //     this.respond = [0, 1]
            // } else if (this.type == 3) {
            //     this.respond = [2]
            // }
            this.playOut = 0
        }
        draw() {
            if (keysPressed['r']) {
                if(this.hooked == 1){
                    this.unhooked = 10
                    this.hooked = 0
                }
            }
            this.playOut -= .29
            this.playOut *= .97
            if (this.playOut < -5) {
                this.playOut = -5
            }
            if (this.hooked == 1) {
                this.body.x = fish.rope[fish.rope.length - 1].anchor.x//+this.xmom
                this.body.y = fish.rope[fish.rope.length - 1].anchor.y //+this.ymom
                if (Math.random() < .05+(.05*this.layer)) {
                    if (Math.random() < .15+(.1*this.layer) && this.playOut <= -3) {
                        if (fish.reeltime <= 0) {
                            fish.reel--
                            fish.reeltime = 10
                            if (fish.reel <= 0) {
                                fish.reel = 0
                            }
                        }
                    }
                    if (this.type < 2) {
                        fish.rope[fish.rope.length - 1].anchor.ymom += this.symom * 2
                        fish.rope[fish.rope.length - 1].anchor.xmom += this.sxmom * 2
                    } else {

                        fish.rope[fish.rope.length - 1].anchor.ymom += this.symom * 4
                        fish.rope[fish.rope.length - 1].anchor.xmom += this.sxmom * 4
                    }
                    this.sxmom = (Math.random() - .5) * 15
                    this.symom = (Math.random() - .5) * 15
                }
            }
            if (this.hooked == 1) {
            } else {
                this.body.x += (((this.dir - .5) * -2.5) * (1 + ((this.layer) * .2)))*1
                this.body.x -= Math.cos(fish.tide) / 1
            }
            // this.body.draw()
            // this.frame++
            if (this.type == 0) {
                this.frame %= 23
            } else if (this.type == 1) {
                this.frame %= 18

            } else if (this.type == 2) {
                this.frame %= 22

            } else if (this.type == 3) {
                this.frame %= 54

            }
            this.ang = 0
            for (let t = Math.max(fish.rope.length - 30, fish.reel); t < fish.rope.length - 1; t++) {
                this.ang += ((0) + (fish.rope[t].beam.angle())) / (Math.max(fish.rope.length - 30, fish.reel) - (fish.rope.length - 1))
            }
            this.xmom = ((Math.cos(this.ang) * this.body.radius)) * 1
            this.ymom = ((Math.sin(this.ang) * this.body.radius)) * 1

            if (this.dir == 0) {

                if (this.hooked == 1) {
                    canvas_context.translate(this.body.x, this.body.y)
                    canvas_context.rotate(-this.ang)
                    canvas_context.translate(-this.body.x, -this.body.y)
                }
                if (this.layer == 0) {
                    canvas_context.drawImage(sfl, this.type * 32, 0, 32, 32, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)
                } else if (this.layer == 1) {
                    canvas_context.drawImage(l1fl, this.type * 48, 0, 48, 48, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)
                } else if (this.layer == 2) {
                    canvas_context.drawImage(l2fl, this.type * 64, 0, 64, 64, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)
                }
                if (this.hooked == 1) {
                    canvas_context.translate(this.body.x, this.body.y)
                    canvas_context.rotate(this.ang)
                    canvas_context.translate(-this.body.x, -this.body.y)
                }

            } else {


                if (this.hooked == 1) {
                    canvas_context.translate(this.body.x, this.body.y)
                    canvas_context.rotate(-this.ang)
                    canvas_context.translate(-this.body.x, -this.body.y)

                    if (this.layer == 0) {
                        canvas_context.drawImage(sfl, this.type * 32, 0, 32, 32, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)
                    } else if (this.layer == 1) {
                        canvas_context.drawImage(l1fl, this.type * 48, 0, 48, 48, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)
                    } else if (this.layer == 2) {
                        canvas_context.drawImage(l2fl, this.type * 64, 0, 64, 64, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)
                    }
                } else {

                    if (this.layer == 0) {
                        canvas_context.drawImage(sfr, this.type * 32, 0, 32, 32, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)
                    } else if (this.layer == 1) {
                        canvas_context.drawImage(l1fr, this.type * 48, 0, 48, 48, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)
                    } else if (this.layer == 2) {
                        canvas_context.drawImage(l2fr, this.type * 64, 0, 64, 64, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)
                    }

                }


                if (this.hooked == 1) {
                    canvas_context.translate(this.body.x, this.body.y)
                    canvas_context.rotate(this.ang)
                    canvas_context.translate(-this.body.x, -this.body.y)
                }


            }

            fish.rope[fish.rope.length - 1].anchor.radius = 5
    //    if (this.layer < 1) {
    //             this.body.radius = 12
    //         } else if (this.layer < 2) {
    //             this.body.radius = 18
    //         } else {
    //             this.body.radius = 24
    //         }

            if (this.layer < 1) {
                this.body.radius = 16
            } else if (this.layer < 2) {
                this.body.radius = 22
            } else {
                this.body.radius = 30
            }

            let sumout = 0
            let baits = []
            for (let t = 0; t < fish.fish.length; t++) {
                if (fish.fish[t].hooked == 1) {
                    baits.push([fish.fish[t].type, fish.fish[t].layer])
                }
            }
            if(baits.length == 0){
                baits = [ [-1, -1]]
            }
            let bo = 0
            if (this.hooked != 1) {

                if (fish.rope[fish.rope.length - 1].anchor.doesPerimeterTouch(this.body)) {
                    for (let k = 0; k < baits.length; k++) {
                        if (bo == 1) {
                            // continue
                        }
                        if (this.respond.includes(baits[k][0]) && baits[k][1] == this.layer-1) {
                            if (baits[k][0] == -1) {
                                if (!this.unhooked > 0) {

                                    this.hooked = 1
                                } else {

                                    this.unhooked--
                                }
                                break
                            } else {
                                for (let t = 0; t < fish.fish.length; t++) {

                                    if (fish.fish[t].type == baits[k][0] && fish.fish[t].hooked == 1) {
                                        if (!this.unhooked > 0) {
                                            fish.fish[t].marked = 1
                                            this.hooked = 1
                                        } else {

                                            this.unhooked--
                                        }
                                        bo = 1
                                        break
                                    }
                                }

                            }
                        }
                    }
                }
            } if (this.layer < 1) {
                this.body.radius = 16
            } else if (this.layer < 2) {
                this.body.radius = 24
            } else {
                this.body.radius = 36
            }
        }
    }

    class Fishing {
        constructor() {
            this.boat = new Rectangle(0, 100, 40, 10, "#FFFFFF")
            this.boat.index = 180
            this.water = []
            this.angle = 0
            for (let t = 0; t < 320; t++) {
                let rect = new Rectangle(t * 4, 100, 4, 700, "black")
                rect.angle = (t * Math.PI) / 15
                rect.angle2 = (t * Math.PI) / 19
                rect.h = 100
                this.water.push(rect)
            }
            this.boat.x = this.water[this.boat.index].x
            this.boat.y = this.water[this.boat.index].y - 10
            let spring = new SpringOP(this.boat, new Circle(this.boat.x, this.boat.y + 2, 1, "brown", 0, 0, .95, 1), 3, 3, "white")
            this.rope = [spring]
            for (let t = 0; t < 85; t++) {
                spring = new SpringOP(spring.anchor, new Circle(spring.anchor.x, spring.anchor.y + 2, 1, "brown", 0, 0, .95, 1), 2 + (t / 85), 3, `rgb(${255 + ((255 / 85) * t)},${255 + ((255 / 85) * t)},${255 + ((255 / 85) * t)})`)
                this.rope.push(spring)
            }
            this.reel = 0
            this.tide = 0
            this.reelish = 0
            this.reelcap = 2
            this.fish = []
            this.score = 0
            this.past = Date.now()
            this.reeltime = 10
        }
        scoreUp(n) {
            // if (n == 3) {
            //     return 36
            // }
            if (n == -4) {
                return 25
            }
            if (n == 4) {
                return 100
            }
            if (n == 3) {
                return 50
            }
            if (n == 2) {
                return 45
            }
            if (n == 1) {
                return 15
            }
            if (n == 0) {
                return 3
            }
        }
        draw() {
            if (this.past - Date.now() < -180000) {

                canvas_context.fillStyle = "black"
                canvas_context.font = "50px arial"
                canvas_context.fillText("Score: " + this.score, 600, 360)
                canvas_context.fillText("Again? " , 600, 460)
                return
            } else {

                canvas_context.fillStyle = "black"
                canvas_context.font = "20px arial"
                canvas_context.fillText("Time: " + Math.floor(180 - (this.past - Date.now()) / -1000), 600, 30)
            }
            this.fish.sort((a, b) => a.layer > b.layer ? -1 : 1)
            if (this.reeltime > 0) {
                this.reeltime--
            }
            this.tide += .0015
            let swad = Math.cos(this.tide) / 5
            this.angle += swad
            let kswad = -.5 * swad

            for (let t = 0; t < this.water.length; t++) {
                this.water[t].y = this.water[t].h + (Math.cos(this.water[t].angle + this.angle) * 9) + (Math.sin(this.water[t].angle2 + this.angle) * 9)
                this.water[t].draw()
                this.water[t].angle -= kswad
                this.water[t].angle2 -= kswad * .8
                this.water[t].color = "black" //`rgb(${40+Math.floor(Math.cos(this.water[t].angle) * 10)},${90+Math.floor(Math.sin(this.water[t].angle2) * 20)},${240 + Math.floor(Math.sin(this.water[t].angle2) * 5)})`
                let link = new Line(this.water[t].x, this.water[t].y, this.water[t].x + 4, this.water[t].y, "white", 2)
                link.draw()
            }
            this.boat.x = this.water[this.boat.index].x
            this.boat.y = this.water[this.boat.index].y - 10
            this.boat.xmom = 0
            this.boat.ymom = 0

            this.angb = (Math.PI+(new LineOP(this.water[this.boat.index], this.water[this.boat.index+4], "red", 1)).angle())
            canvas_context.translate(this.boat.x, this.boat.y)
            canvas_context.rotate(this.angb)
            canvas_context.translate(-this.boat.x, -this.boat.y)
            this.boat.draw()
            canvas_context.translate(this.boat.x, this.boat.y)
            canvas_context.rotate(-this.angb)
            canvas_context.translate(-this.boat.x, -this.boat.y)
            
            if (keysPressed['d']) {
                this.boat.index++
                if (this.boat.index > 313) {
                    this.boat.index = 313
                }
            }
            if (keysPressed['a']) {
                this.boat.index--
                if (this.boat.index < 0) {
                    this.boat.index = 0
                }
            }
            if (keysPressed['w']) {
                this.reelish++
                if (this.reelish > this.reelcap) {
                    this.reelish = 0
                    this.reel++
                    for (let t = 0; t < this.rope.length; t++) {
                        if (t == this.reel) {


                            for (let k = 0; k < this.rope.length; k++) {
                                if (t != k) {
                                    this.rope[k].anchor.x += (this.boat.x - this.rope[t].anchor.x) * .5
                                    this.rope[k].anchor.y += (this.boat.y - this.rope[t].anchor.y) * .5
                                }
                            }

                        }
                    }
                }
                if (this.reel > 84) {
                    this.reel = 84
                }
            } else if (keysPressed['s']) {
                this.reelish++

                if (this.reel > 0) {
                    for (let t = 0; t < this.fish.length; t++) {
                        if (this.fish[t].hooked == 1) {
                            this.fish[t].playOut += .967
                            this.fish[t].playOut *= 1.11111
                            this.rope[this.rope.length - 1].anchor.ymom += 3+((this.fish[t].layer+1)*3)
                        }
                    }
                }
                // if(this.reelish >  this.reelcap){
                if (this.reelish > Math.floor(this.reelcap/10)) {
                    this.reelish = 0
                    this.reel--

                    if (this.reel < 0) {
                        this.reel = 0
                    }
                }
            }

            if (Math.random() < .025) {
                if(Math.random() < .025){
                    this.fish.push(new Crafe(1, 1, 1))
                }else{
                    this.fish.push(new Fisk(1, 1, 1))
                }
            }

            this.reelcap = 0
            for (let t = 0; t < this.fish.length; t++) {
                if (this.fish[t].hooked == 1) {
                    if (this.fish[t].playOut > -3) {

                    } else {

                        // if (this.fish[t].type == 1) {
                        //     this.reelcap += 2
                        // } else
                        if (this.fish[t].layer == 0) {
                            this.reelcap+=3

                        } else if (this.fish[t].layer == 1) {

                            this.reelcap += 7
                        } else if (this.fish[t].layer == 2) {

                            this.reelcap += 15
                        }
                        // else if (this.fish[t].type == 3) {
                        //     this.reelcap += 5

                        // }
                    }
                }
            }

            for (let t = 0; t < this.fish.length; t++) {
                if (this.fish[t].body.x < -1000 || this.fish[t].body.x > 2400) {
                    this.fish.splice(t, 1)
                } else if (this.fish[t].marked == 1) {
                    this.fish.splice(t, 1)
                } else if (this.reel >= 80) {
                    if (this.fish[t].hooked == 1) {
                        this.score += this.scoreUp(this.fish[t].layer)
                        this.fish.splice(t, 1)
                    }
                }

            }
            for (let t = 0; t < this.rope.length; t++) {
                this.rope[t].balance()
            }
            for (let t = 0; t < this.rope.length; t++) {
                if (t < this.reel) {
                    this.rope[t].anchor.x = this.boat.x
                    this.rope[t].anchor.y = this.boat.y
                    this.rope[t].body.x = this.boat.x
                    this.rope[t].body.y = this.boat.y
                    this.rope[t].anchor.xmom = 0
                    this.rope[t].anchor.ymom = 0
                    this.rope[t].body.xmom = 0
                    this.rope[t].body.ymom = 0
                } else {
                    this.rope[t].anchor.xmom -= swad / 8
                    this.rope[t].anchor.ymom += .05
                    this.rope[t].anchor.frictiveMove()
                    this.rope[t].body.frictiveMove()
                }
            }

            for (let t = 0; t < this.rope.length; t++) {
                this.rope[t].balance()
            }
            for (let t = 0; t < this.rope.length; t++) {
                if (t < this.reel) {
                    this.rope[t].anchor.x = this.boat.x
                    this.rope[t].anchor.y = this.boat.y
                    this.rope[t].body.x = this.boat.x
                    this.rope[t].body.y = this.boat.y
                    this.rope[t].anchor.xmom = 0
                    this.rope[t].anchor.ymom = 0
                    this.rope[t].body.xmom = 0
                    this.rope[t].body.ymom = 0
                } else {
                    this.rope[t].anchor.xmom -= swad / 8
                    this.rope[t].anchor.ymom += (t * t) / (300 * 170)
                    if (t == this.rope.length - 1) {

                        this.rope[t].anchor.ymom += (t * t) / (30 * 150)
                    }
                    this.rope[t].anchor.frictiveMove()
                    this.rope[t].body.frictiveMove()
                }
            }
            let swood = 0
            for (let t = 0; t < this.rope.length; t++) {
                this.rope[t].draw()
                swood += this.rope[t].beam.hypotenuse()
            }
            canvas_context.fillStyle = "black"
            canvas_context.font = "25px arial"
            canvas_context.fillText("Score: " + this.score, 20, 30)
            canvas_context.fillText("Reel: " + Math.floor((this.reel / 84) * 100) + "%", 20, 70)
            canvas_context.fillText("WASD", 1200, 30)
            for (let t = 0; t < this.fish.length; t++) {
                this.fish[t].draw()

            }
        }
    }



    let fish = new Fishing()
    fishsong.volume = .15

    function main() {
        fishsong.play()
        canvas_context.clearRect(0, 0, canvas.width, canvas.height)  // refreshes the image
        // gamepadAPI.update() //checks for button presses/stick movement on the connected controller)
        // game code goes here
        canvas_context.imageSmoothingEnabled = false
        canvas_context.fillStyle = "#444444"
        canvas_context.fillRect(0, 0, 1280, 720)
        fish.draw()

        // if (keysPressed['-'] && recording == 0) {
        //     recording = 1
        //     video_recorder.record()
        // }
        // if (keysPressed['='] && recording == 1) {
        //     recording = 0
        //     video_recorder.stop()
        //     video_recorder.download('Fish.webm')
        // }
        // console.log(fish)
        // bs.act()
        // if(keysPressed[' ']){
        //     bs = new BitSmasher([...bs.wset])
        // }
    }

})
