function reverse_a_number(n)
{
    n = n + "";

    return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(12121423563474)));