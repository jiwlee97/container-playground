package com.kwon.kwon.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("")
public class MainController {

    @GetMapping("/api/v1/imscow11253")
    public String method1(){
        return "imscow11253";
    }

    @GetMapping("/healthcheck")
    public String method2(){
        return "healthcheck ";
    }
}
