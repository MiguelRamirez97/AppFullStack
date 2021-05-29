package com.example.questions.usecases;

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
import reactor.core.publisher.Mono;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class DeleteUseCaseTest {
    @SpyBean
    DeleteUseCase deleteUseCase;

    @MockBean
    QuestionRepository questionRepository;

    @MockBean
    AnswerRepository answerRepository;

    @Test
    void deleteTest(){
        var questionDTO = new QuestionDTO("01","u01","test?","test","test");
        var answerDTO = new AnswerDTO("01","01","u01","test");
        Mockito.when(questionRepository.deleteById(questionDTO.getId())).thenReturn(Mono.empty());
        Mockito.when(answerRepository.deleteByQuestionId(answerDTO.getQuestionId())).thenReturn(Mono.empty());
        var dataEmpty = deleteUseCase.apply(questionDTO.getId()).block();
        Assertions.assertEquals(dataEmpty,null);
    }
}