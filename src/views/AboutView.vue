<template>
  <div class="about">
    <h1>Questions & Answers</h1>
    <p class="question">Q: What's a closure? Where in the code is there a closure?</p>
    <p>A: In js, a closure is a function defined inside another function called parent function and has access to the variable which is declared and defined in parent function scope.</p>
    <p>The closure has access to the variable in three scopes:</p>
    <ul>
      <li>Variable declared in his own scope</li>
      <li>Variable declared in parent function scope</li>
      <li>Variable declared in the global namespace</li>
    </ul>
    <p>Generally speaking, the use of closures is associated with functional programming languages, in which functions can be returned as results from higher-order functions, or passed as arguments to other function calls;</p>
    <p></p>
    <p class="question">Q: Which are the potential side-effects in any function? Could you point out any of these cases in your code? Are they expected? Can they be avoided?</p>
    <p>A: Side effects happen when you do something in aside from returning a value from a function. Many things can be side effects, like an api request, a timeout or even a console.log statement.</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .question {
    font-weight: bold;
  }
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    p {

    }
  }
}
</style>
