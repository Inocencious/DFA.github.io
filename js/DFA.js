class DFA {
    /**
     * @description The set of states of the DFA
     * @example
     * states = {q0, q1, q2}
     * @example
     * states = {q0, q1, q2, q3}
     */
     states = []
  
  
    /**
     * @description The alphabet of the DFA
     */
    alphabet = []
  
  
    /**
     * @description The transition function of the DFA
     * @example
     * transitions = {
     * "q0.a":"q1", "q0.b":"q2",
     * "q1.a":"q3", "q1.b":"q7",
     * "q2.a":"q8", "q2.b":"q4",
     * }
     */
    transitions = {}
  
  
    /**
     * @description The start state of the DFA or the initial state.
     * @example
     * q0
     */
    initial_state = "q0"
  
    /**
     * @description The final state/states of the DFA. This could be multiple.
     * @example F = [0,2]
     */
    final_states = []
  
  
    /**
     * @description The path of the DFA. This is used to show the path of the DFA when it is executed.
     * @example path = [q0, q1, q2]
     * @example path = [q0, q1, q2, q3]
    */
    path = []
  
  
    constructor(alphabet, states , initial_state, final_states, transitions) {
      this.states = states; // set of states
      this.alphabet = alphabet; // alphabet
      this.transitions = transitions; // transition function
      this.initial_state = initial_state; // start state
      this.final_states = final_states; // final states
      this.path = [];
    }
    /**
     * @description gets the states of the Regular Expression
     * @param w - input of the user
     * @returns boolean
     */
    execute(input) { // input = "ab"
      if (this.path.length > 0)
        this.path = [];
        
      let q = this.initial_state; // "q0"
      this.path.push(q);
      while (input != "" && this.states.includes(q)) {
        q = this.transitions[`${q}.${input[0]}`]; // "q0.a": "q1"
        this.path.push(q); 
        input = input.slice(1);
      }
      if (this.final_states.includes(q)) 
        return true;
      return false;
    }
  }
  
  /**
   * Example of a DFA
   * const prob1 = new DFA(
              ["a","b"],  
              ['q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7','q8'], 
              'q0', 
              ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7','q8'],
              {
                  "q0.a":"q1", "q0.b":"q2",
                  "q1.a":"q3", "q1.b":"q7",
                  "q2.a":"q8", "q2.b":"q4",
                  "q3.a":"q5", "q3.b":"q6",
                  "q4.a":"q5", "q4.b":"q6",
                  "q5.a":"q5", "q5.b":"q6",
                  "q6.a":"q5", "q6.b":"q6",
                  "q7.a":"q8", "q7.b":"q8",
                  "q8.a":"q7", "q8.b":"q7",
              }
          );
   */