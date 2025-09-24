package com.pitergomes.integracao.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")

public class APIController {

    @GetMapping("/mensagem")
    public String getMensagem() {
        return "Servidor funcionando! Recebendo dados do Back-End com Spring Boot";
    }

    @PostMapping("/dados")
    public String postMethodName (@RequestBody String dados){
        return "Recebido: " + dados;
    }
}
