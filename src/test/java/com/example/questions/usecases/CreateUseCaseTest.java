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
import reactor.core.publisher.Mono;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CreateUseCaseTest {
    @SpyBean
    CreateUseCase createUseCase;

    @MockBean
    QuestionRepository questionRepository;

    @Test
    public void createTest(){
        var questionDTO = new QuestionDTO("a1","u1","questiontest","test","test");
        var question = new Question();
        question.setId("a1");
        question.setUserId("u1");
        question.setQuestion("questiontest");
        question.setType("test");
        question.setCategory("test");
        Mockito.when(questionRepository.save(Mockito.any(Question.class))).thenReturn(Mono.just(question));
        var questionId = createUseCase.apply(questionDTO);
        Assertions.assertEquals(questionId.block(),questionDTO.getId());
    }
}