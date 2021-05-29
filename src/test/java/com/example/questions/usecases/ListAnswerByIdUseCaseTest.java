package com.example.questions.usecases;

import com.example.questions.collections.Answer;
import com.example.questions.collections.Question;
import com.example.questions.model.AnswerDTO;
import com.example.questions.model.QuestionDTO;
import com.example.questions.repo.AnswerRepository;
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
class ListAnswerByIdUseCaseTest {
    @MockBean
    AnswerRepository answerRepository;

    @SpyBean
    ListAnswerByIdUseCase listAnswerByIdUseCase;

    @Test
    void getByUserTest() {

        var answerDto = new AnswerDTO("01", "q01", "u01", "test");
        var answer = new Answer();
        answer.setId("01");
        answer.setQuestionId("q01");
        answer.setUserId("u01");
        answer.setAnswer("test");
        Mockito.when(answerRepository.findByUserId(answerDto.getUserId())).thenReturn(Flux.just(answer));
        var resultAnswerDTO = listAnswerByIdUseCase.apply(answerDto.getUserId()).collectList().block();
        Assertions.assertEquals(resultAnswerDTO.get(0).getId(), answer.getId());
        Assertions.assertEquals(resultAnswerDTO.get(0).getQuestionId(), answer.getQuestionId());
        Assertions.assertEquals(resultAnswerDTO.get(0).getAnswer(), answer.getAnswer());
    }
}