// Función del agente reactivo
function reflex_agent(location, state) {
    // Si el estado actual es "DIRTY", la acción es "CLEAN"
    if (state === "DIRTY") return "CLEAN";
    // Si la ubicación es "A" y está limpia, la acción es "RIGHT"
    else if (location === "A") return "RIGHT";
    // Si la ubicación es "B" y está limpia, la acción es "LEFT"
    else if (location === "B") return "LEFT";
}

// Función para probar el agente reactivo
function test(states, steps) {
    // Detener después de 8 pasos
    if (steps === 8) return;

    // Determinar la ubicación actual y el estado correspondiente
    var location = states[0];
    var state = location === "A" ? states[1] : states[2];
    // Obtener el resultado de la acción del agente reactivo
    var action_result = reflex_agent(location, state);
    
    // Registrar la ubicación, el estado y la acción en el log
    document.getElementById("log").innerHTML += "<br>Location: " + location + " | State: " + state + " | Action: " + action_result;

    // Actualizar el estado según la acción realizada
    if (action_result === "CLEAN") {
        if (location === "A") states[1] = "CLEAN";
        else if (location === "B") states[2] = "CLEAN";
    } else if (action_result === "RIGHT") states[0] = "B";
    else if (action_result === "LEFT") states[0] = "A";

    // Llamar a la función de prueba nuevamente después de 2 segundos
    setTimeout(function() {
        test(states, steps + 1);
    }, 2000);
}

// Estado inicial: la ubicación es "A" y ambas habitaciones están sucias
var states = ["A", "DIRTY", "DIRTY"];
// Iniciar la prueba con 0 pasos realizados
test(states, 0);
