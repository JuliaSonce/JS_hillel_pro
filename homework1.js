'number' + 3 + 3
/* Result "number33"
concatenate all operators together.
1. "number" and 3 was converted  and we received  string "number3"
2. "number3" and 3 was converted and we received string "number33"
*/

null + 3
/*
Result 3 
1. null converted to 0;
2. 0 + 3 is 3
 */

5 && "qwerty"

    /* Result  "qwerty"
     Because we have both truthy operators 
     it returns last truthy operators  "qwerty"
    */

    + '40' + +'2' + "hillel";
/* Result  "42hillel"
1. + '40' will be converted in number 40
2. +'2' will be converted in number 2
3. 40 + 2 will be  42 mathematic adding 
4. 42 + 'hillel' will be concatenate because they are number and string 
*/

'10' - 5 === 6;
/* Result  false
1. ('10' - 5)  will be 5 ('10' convert in number and )
2. 5 === 6 is false 
*/

true + false
/* Result  1
 1. true becomes 1
 2. false becomes 0
*/

'4px' - 3
/* Result  NaN
 "4px" couldn't be converted to number and NaN - 3 is NaN
*/

'4' - 3
/* Result 1
 1. '4' will be number 4 
 2. 4 - 3 = 1
*/

'6' + 3 ** 0;
/* Result 0
1. 3 ** 0 is 1 this will be done first because of mathematic rules 
2. '6' + 1 will be string of "61" because "6" is string and we make concatenation 
*/
12 / '6'
/* Result 2
1. '6' will be converted to 6
2. 12 / 6 = 2 
*/

'10' + (5 === 6);

/* Result "10false"
1. (5 === 6) since 5 is not equal 6 we receive false
2. Because we have "10" as string, for concatenation 
we need convert false to "false " to string 
3. "10" + "false" became "10false"
*/

null == ''
/* Result false 
Because to have true we need null == null
*/

3 ** (9 / 3);
/* Result 27
1. (9 / 3) is 3 need to be done first due to to 
mathematic rules expression inside the parentheses
2. 3 ** 3 is 27 
*/

!!'false' == !!'true'
/* Result false
!! converted every element in boolen 
 1. !!'false' by first ! became false and by second ! to ture
2. !!'true' by first ! became true and by second ! to false 
3. by comparison true == false we receive false 
 */

0 || '0' && 1
    /* Result 1
    1. '0' && 1 is 1 because  we return  truthy operator  
    2. 0 || 1 is 1 because it  truthy operator
    */

    (+null == false) < 1;
/* Result false 
1. (+null == false) +null will be 0 and 0 == false is true
2. true is 1 < 1 is false 
*/


false && true || true
/* Result false 
1. && return first falsy operator
*/

false && (false || true);
/* Result false 
1. false || true we receive true I did it first because it was in parentheses
2. && return first falsy operator
*/
(+null == false) < 1 ** 5;
/* Result false 
1. (+null == false) +null will be 0 and 0 == false is true
2. 1 ** 5 will be 1 
3. true is 1 < 1 is false 
*/