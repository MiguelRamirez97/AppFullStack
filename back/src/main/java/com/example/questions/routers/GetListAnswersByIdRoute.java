package com.example.questions.routers;

import com.example.questions.model.AnswerDTO;
import com.example.questions.usecases.ListAnswerByIdUseCase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.web.reactive.function.server.RequestPredicates.GET;
import static org.springframework.web.reactive.function.server.RequestPredicates.accept;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

@Configuration
public class GetListAnswersByIdRoute {

    @Bean
    public RouterFunction<ServerResponse> getOwnerAnswerAll(ListAnswerByIdUseCase listAnswerByIdUseCase) {
        return route(
                GET("/getAllAnswers/{userId}").and(accept(MediaType.APPLICATION_JSON)),
                request -> ServerResponse.ok()
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(BodyInserters.fromPublisher(listAnswerByIdUseCase.apply(
                                request.pathVariable("userId")),
                                AnswerDTO.class)
                        )
        );
    }
}
