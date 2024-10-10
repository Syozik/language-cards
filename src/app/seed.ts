const words = `
what's up? - hvad så?
let's go - skal vi gå?
cheers - skål !
you're welcome - det var så lidt (it is so little)
yes please - ja tak
no thanks - nej tak
I'm sorry(I did that) - undskyld
I'm sorry (for you) - det gør mig ondt (that does me evil)
good morning - godmorgen 
good night - godnat
see you later - vi ses senere (we seen - are later)
goodbye - farvel (farewell)
how - hvordan
it; that; the (before adjective) - den; det
to go; to walk - at gå 
it goes; it walks - det går 
how is it going - hvordan går det?
good; well - godt 
it's going well - det går godt
I - jeg
you (singular) - du
to be called - at hedde
sound - lyder
you are called - du hedder
what - hvad
what's your name - hvad hedder du?
my name is - jeg hedder... 
am; is; are - er
genius - et geni
you're a genius - du er et geni
1 - en
2 - to
3 - tre
4 - fire 
5  - fem
6 - seks
7 - syv
8 - otte 
9 - ni
10 - ti
0 - nul
food - mad
bread - brød
rye bread - rugbrød
pasta - pasta
rice - ris
a potato - en kartoffel
a vegetable - en grøntsag
fruit - frugt
meat - kød
salad - salat
an apple - et æble
a banana - en banan
an orange - en appelsin
a lemon - en citron
soup - suppe
an egg - et æg
cheese - ost
chicken - kylling
pork - svinekød
beef - oksekød
fish - fisk
water - vand
coffee - kaffe
tea - te
beer - øl
wine - vin
milk - mælk
sauce - sovs
butter - smør
(to) can; (to) could - at kunne
to like - at kunne lide
I like - jeg kan godt lide
not - ikke
I don't like - jeg kan ikke lide
delicious - lækker
nice - rart
to be - at være
name - navn
my, mine - mit
your, yours - dit
likewise, you too - i lige måde
you - dig
to meet - at møde
to say - at sige
you, one, we, they - man
to catch - at fange
one more time - en gang til
to speak, to talk - at tale
slow - langsom
to write down - at skrive ned
me - mig`;

async function addWords(words: string) {
  const couples = words.trim().split("\n");
  for (let couple of couples) {
    const [en_word, dk_word] = couple.split(" - ").map(word => word.trim());
    if (en_word && dk_word) {
      try {
        const res = await fetch("http://localhost:3000/api/addWord", {
          method: "PUT",
          body: JSON.stringify({ en_word, dk_word }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) {
          console.error(`Failed to add word: ${en_word}. Status: ${res.status}`);
        }
      } catch (error) {
        console.error(`Error adding word: ${en_word}. Error: ${error.message}`);
      }
    }
  }
}

// addWords(words);