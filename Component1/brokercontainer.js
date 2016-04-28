window.raise = function (name,parameter){
    $(this).trigger(name, parameter);
}
window.StartBrokerContainers = function(){
    $(".to-broker").each(function(){
      $(this).attr("data-tobroker")
        .split(",")
        .forEach(function(item){
            $(this).on(item, function(e, data){              
              postal.publish({
                channel: "dom",
                topic: "events." + e.type,
                data: data
              });
          });
        });
      }); 
}
