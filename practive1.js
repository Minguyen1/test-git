function makeRedColor(){
    document.getElementById('content').style.color = 'red';
}
function makeBlueColor(){
    document.getElementById('content').style.color = 'blue';
}
function makeOrangeColor(){
    document.getElementById('content').style.color = 'orange';
}
function resetText(){
    document.getElementById('content').style.color = 'black';
    document.getElementById('content').innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum numquam in, delectus reprehenderit labore, odit magni consequuntur, quas ea sequi vel expedita similique voluptatem repudiandae blanditiis. Natus enim iusto distinctio!
    Accusantium dolore aliquam omnis assumenda iste dolores adipisci iusto nesciunt cum laborum nulla in, tempora quibusdam et. Cum, accusantium, obcaecati itaque quo sit ipsa, neque sed distinctio adipisci nisi illo!
    Excepturi harum, itaque sunt repudiandae, accusantium corrupti quae debitis nostrum voluptatum repellat tempore eum? Consequatur placeat repellat quod? Est excepturi blanditiis sequi ullam tenetur voluptates illo aut amet magnam minus.
    Iste, accusantium sed velit sint necessitatibus fugit aperiam praesentium et illum odio? Eum rerum delectus quidem omnis saepe illo quas illum, aut id ratione corporis voluptatibus perspiciatis, vel porro voluptatem.
    Nam quisquam repellat eius doloremque porro omnis quae, nihil quis earum, quaerat neque, assumenda placeat dolorem exercitationem expedita unde soluta hic odit nisi cumque. Ducimus delectus enim porro. Quisquam, repellendus.`;
}
function changeText(){
    document.getElementById('content').innerHTML = 'SUNTEXT VIỆT NAM';
}