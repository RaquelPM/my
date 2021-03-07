function mover(classe, quad){
    const el = document.querySelector(classe);
    el.addEventListener('mousedown', mousedown);

    function mousedown(e){
        window.addEventListener('mousemove', mousemove);
        window.addEventListener('mouseup', mouseup);

        let prevX = e.clientX;
        let prevY = e.clientY;

        console.log(prevX);
        console.log(prevY);

        function mousemove(e){
            let newX = prevX - e.clientX;
            let newY = prevY - e.clientY;

            console.log(newX);
            console.log(newY);

            quad = el.getBoundingClientRect();

            if(prevX>200 && prevX<window.innerWidth-50){
                el.style.left = quad.left - newX + "px";
            }

            if(prevY>0 && prevY<window.innerHeight-200){
                el.style.top = quad.top - newY + "px";
            }

            prevX = e.clientX;
            prevY = e.clientY;
        }

        function mouseup(){
            window.removeEventListener("mousemove", mousemove);
            window.removeEventListener("mouseup", mouseup);
        }
    }
}

export default mover