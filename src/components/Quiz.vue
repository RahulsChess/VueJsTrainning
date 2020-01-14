





<template>
  <div>

  <h1>{{ quiz.title }}</h1>
  <!-- index is used to check with current question index -->
  <div v-for="(question, index) in quiz.questions" :key="index">
    <!-- Hide all questions, show only the one with index === to current question index -->
    <div v-show="index === questionIndex">
      <h2>{{ question.text }}</h2>
      <ol>
        <li v-for="(response, val) in question.responses" :key="val">
          <label>
            <!-- The radio button has three new directives -->
            <!-- v-bind:value sets "value" to "true" if the response is correct -->
            <!-- v-bind:name sets "name" to question index to group answers by question -->
            <!-- v-model creates binding with userResponses -->
            <input type="radio"
                  :id="'demo'+index"
                   v-bind:value="response.correct"
                   name="test"
                   v-model="userResponses[index]" > {{response.text}}
          </label>
<div style="display:none">  {{ index++ }}</div>
        </li>
      </ol>
      <!-- The two navigation buttons -->
      <!-- Note: prev is hidden on first question -->
      <button v-if="questionIndex > 0" v-on:click="prev">
        prev
      </button>
      <button v-on:click="next">
        next
      </button>
    </div>
  </div>
  <div v-show="questionIndex === quiz.questions.length">
    <h2>
    Quiz finished
  </h2>
    <p>
      Total score: {{ score() }} / {{ quiz.questions.length }}
    </p>
  </div>

  </div>
</template>

<script>

var quiz = {
  title: 'My quiz',
  questions: [
    {
      text: "Which is Not Cricket Player ",
      responses: [
        {text: 'virat kohali'},
        {text: 'Manoj matlane!', correct: true},
          {text: 'Hardik Pandya!'},
            {text: 'MS Dhoni!'}
      ]
    }, {
      text: "Vue js it is combination of ? ",
      responses: [
        {text: 'jQuary + Angular' },
        {text: 'React js + Angular',correct: true},
          {text: 'Preact + React'},
            {text: 'Js + Jquery'},
      ]
    }
  ]
};
export default {
  data() {
    return {
 quiz: quiz,
    // Store current question index
    questionIndex: 0,
    // An array initialized with "false" values for each question
    // It means: "did the user answered correctly to the question n?" "no".
    userResponses: Array(quiz.questions.length).fill(false),

index:0,





    }
  },

   methods: {
    // Go to next question
    next: function() {
      var test=document.getElementsByName('test');
      console.log(test);
      this.questionIndex++;
    },
    // Go to previous question
    prev: function() {
      this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function() {
      return this.userResponses.filter(function(val) { return val }).length;
    }
  }
}
</script>

<style scoped>


body{
    font-size: 20px;
    font-family: 'Work Sans', sans-serif;
    color: #333;
  font-weight: 300;
  text-align: center;
  background-color: #f8f6f0;
}
h1{
  font-weight: 300;
  margin: 0px;
  padding: 10px;
  font-size: 20px;
  background-color: #444;
  color: #fff;
}
.question{
  font-size: 30px;
  margin-bottom: 10px;
}
.answers {
  margin-bottom: 20px;
  text-align: left;
  display: inline-block;
}
.answers label{
  display: block;
  margin-bottom: 10px;
}
button{
  font-family: 'Work Sans', sans-serif;
    font-size: 22px;
    background-color: #279;
    color: #fff;
    border: 0px;
    border-radius: 3px;
    padding: 20px;
    cursor: pointer;
    margin-bottom: 20px;
}
button:hover{
    background-color: #38a;
}





.slide{
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.5s;
}
.active-slide{
  opacity: 1;
  z-index: 2;
}
.quiz-container{
  position: relative;
  height: 200px;
  margin-top: 40px;
}



</style>
