let n = 10;

out:
for (let i = 2; i <= n; i++) { 
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue out; 
  }
  alert( i ); 
}