function collision() {
    if(block1.isTouching(box)) {
        box.shapeColor = "blue";
        box.setVelocity(0,0);
        music.stop();
    }
    if(block2.isTouching(box)) {
        box.shapeColor = "red";
        box.setVelocity(0,0);
        music.stop();
    }
    if(block3.isTouching(box)) {
        box.shapeColor = "green";
        box.setVelocity(0,0);
        music.stop();
    }
    if(block4.isTouching(box)) {
        box.shapeColor = "pink";
        box.setVelocity(0,0);
        music.stop();
    }
}