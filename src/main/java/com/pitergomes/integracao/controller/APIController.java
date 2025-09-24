package com.pitergomes.integracao.controller;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "https://integracao-backend-frontend.vercel.app/")
@RestController
@RequestMapping("/api")

public class APIController {

    @GetMapping("/mensagem")
    public String getMensagem() {
        return "Servidor ativo! Recebendo dados do Back-End.";
    }

    @PostMapping("/dados")
    public String postDados (@RequestBody String dados){
        return "Recebido pelo servidor: " + dados;
    }
}
