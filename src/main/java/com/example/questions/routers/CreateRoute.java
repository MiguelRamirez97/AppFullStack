package com.example.questions.routers;

import com.example.questions.model.QuestionDTO;
import com.example.questions.usecases.CreateUseCase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

import java.util.function.Function;

import static org.springframework.web.reactive.function.server.RequestPredicates.POST;
import static org.springframework.web.reactive.function.server.RequestPredicates.accept;
import static org.springframework.web.reactive.function.server.RouterFunctions.*;

@Configuration
public class CreateRoute {

    @Bean
    public RouterFunction<ServerResponse> create(CreateUseCase createUseCase){
        return route(
                POST("/create").and(accept(MediaType.APPLICATION_JSON)),
                serverRequest -> serverRequest.bodyToMono(QuestionDTO.class)
                        .flatMap(questionDTO -> createUseCase.apply(questionDTO)
                                .flatMap(result -> ServerResponse.ok().contentType(MediaType.TEXT_PLAIN).bodyValue(result)))
        );
    }
}
