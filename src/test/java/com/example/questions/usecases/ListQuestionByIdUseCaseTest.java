package com.example.questions.usecases;

import com.example.questions.collections.Question;
import com.example.questions.model.QuestionDTO;
import com.example.questions.repo.QuestionRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Flux;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ListQuestionByIdUseCaseTest {
    @MockBean
    QuestionRepository questionRepository;

    @SpyBean
    ListQuestionByIdUseCase listQuestionByIdUseCase;

    @Test
    void getByUserTest(){

        var questionDTO = new QuestionDTO("01","u01","test?","test","test");
        var question = new Question();
        question.setId("01");
        question.setUserId("u01");
        question.setQuestion("test?");
        question.setType("test");
        question.setCategory("test");
        Mockito.when(questionRepository.findByUserId(questionDTO.getUserId())).thenReturn(Flux.just(question));
        var resultQuestionDTO = listQuestionByIdUseCase.apply(questionDTO.getUserId()).collectList().block();
        Assertions.assertEquals(resultQuestionDTO.get(0).getId(),question.getId());
        Assertions.assertEquals(resultQuestionDTO.get(0).getQuestion(),question.getQuestion());
        Assertions.assertEquals(resultQuestionDTO.get(0).getType(),question.getType());

    }

}