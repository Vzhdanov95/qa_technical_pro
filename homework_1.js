'number' + 3 + 3;
// result: number33. Concatination happened

null + 3;
// result: 3. In arithmetic operations, JavaScript converts null to 0.

5 && "qwerty";
// result: 'qwerty'. AND (&&) returns first falsy operand but 5 is truthy.

+'40' + +'2' + "hillel";
// result: 42hillel. +40 here is an unary convertation into a number

'10' - 5 === 6;
// result: false. Since '10' - 5 is 5 and not fully matches 6

true + false;
// result: 1. True and false are 1 and 0 numbers in js on the background

'4px' - 3;
// result: NaN. Any arithmetic operation involving NaN results NaN

'4' - 3;
// result: 1. Numbers are prio in js so here '4' becomes number rather than string

'6' + 3 ** 0; 
/* result: 61. 3 ** 0 operation happens first (becomes 1). 
then + sees the string to concatinate it */

12 / '6';
// result: 2. The / operator forces numeric conversion. '6' turns into 6

'10' + (5 === 6);
/* result: 10false. 5 === 6 operation triggers first and has false outcome. 
After that js sees concationation */

null == '';
// result false. null can be equal only to 'undefined'. null == undefined -> true

3 ** (9 / 3);
// result 27. ** has a higher precendence but respects '(parentheses)'

!!'false' == !!'true';
// result true. true == true, non empty string is true

0 || '0' && 1;
// result 1. returns the first falsy or last truthy

(+null == false) < 1
// result false. +null here becomes 0 and 0 == false -> true. True is 1 < 0 means false. 

false && true || true
// result. true. false && true → falsefalse || true → true

false && (false || true);
// result false. (false || true) equals true, true && false returns false.

(+null == false) < 1 ** 5;
// result false. +null converted into 0 -> 0 == false is true. So we have true < 1 ** 5 and true < 1 returns false