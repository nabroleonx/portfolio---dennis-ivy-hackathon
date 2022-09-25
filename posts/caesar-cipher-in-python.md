---
title: "Caesar cipher in python"
date: "Jul 14, 2021"
excerpt: "Caesar cipher is a method in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet."
cover_image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/002xff2b659vst8y4ukb.png"
category: "Python"
---

[`Caesar cipher`](https://en.wikipedia.org/wiki/Caesar_cipher) is a method in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example with a shift of 1, A would be replaced by B, B would become C, and so on. The method is apparently named after Julius Caesar, who apparently used it to communicate with his officials.

Thus to cipher a given text we need an integer value, known as a shift which indicates the number of positions each letter of the text has been moved down.

![image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/002xff2b659vst8y4ukb.png)

Example:
Text : `Nabroleonx`
Shift: `4`
Cipher: `Refvspisr|`

Now we are going to create a simple program in python that can encode and decode Caesar cipher based on the user's preference.

First, let's discuss our algorithm:

1. Take input from the user
2. Iterate over the string characters and get the ASCII value of the characters.
3. Find the position of the characters from our designated initial ASCII character using the ASCII value we got in step 2
4. Convert the number we found as position in step three into a character using ASCII which is going to be our encrypted message.

🔰 For step 2 we are going to use `ord()` function to convert a character to its integer position in the ASCII table( i.e. `ord(A)` will give 65).

🔰 For step 4 we will use `chr()` to return the character from the ASCII table that represents the specified Unicode( i.e. `chr(65)` will give "A").

Let's take time to go over our main if condition for our cipher. our characters are assigned to integer values on the ASCII table and we need to know where our character to be encrypted/decrypted is located. So we use `ord()` to change our characters to their integer equivalent in the ASCII table.

`position = ord(char) - ord(" ")`

we subtracted the integer value of the blank space from the integer value of our character to see where our character is relative to our starting position which is blank space. After that

`position = (position + shift) % 95`

Here We’re taking mod with 95 because there are 95 characters in the ASCII table between blank space and "~".

Then we will convert the new position that we had on the above line and add it to our initial character and use `chr()` to change the integer value into the ASCII equivalent.

`new_char = chr(position + ord(" "))`

then we append it to our encrypted_message variable in each iteration and voila we got our encrypted_message.

`encrypted_message += new_char`

🕛 Without further ado let's get to the coding part.

```python
"""
    Written by: Nabroleonx July 14,2021
    Description: Caesar cipher encoder/decoder
"""

print('''
-------------------------------------------------------------
 To decrypt what you encrypted,use the negative of the shift
 value you entered to encrypt your message.
 If you used a shift value of "3" to encrypt your message,
 then use -3 to decrypt your message.
 ------------------------------------------------------------
''')

stop = 'no'

def cipher(message, shift):
    encrypted_message = ""
    for char in message:
        if char >= " " and char <= "~":
            position = ord(char) - ord(" ")
            position = (position + shift) % 95
            new_char = chr(position + ord(" "))
            encrypted_message += new_char
    print("The encrypted message is: ", encrypted_message)


while stop == 'no':

    message = input("Enter the message you want to encrypt/decrypt: ")
    shift = int(input("enter the shift value u want: "))

    cipher(message, shift)

    again = input("do you want to continue? yes/no ").lower()

    if again == 'yes':
        continue
    else:
        print("\n Thanks for using me! Till next time, Cya")
        stop = 'yes'

```

That's it for Caesar cipher, Happy encrypting and decrypting! This is my first post. Any comments or suggestions are welcome.

See y'all next time.
