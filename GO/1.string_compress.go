package main

import (
	"fmt"
	"strconv"
	"strings"
)

func compressString(s string) string {
	if len(s) < 0 {
		return s
	}

	var builder strings.Builder
	count := 1

	for i := 1; i <= len(s); i++ {
		if i < len(s) && s[i] == s[i-1] {
			count++
		} else {
			builder.WriteByte(s[i-1])
			builder.WriteString(strconv.Itoa(count))
			count = 1
		}
	}

	compressed := builder.String()
	if len(compressed) < len(s) {
		return compressed
	}

	return s

}

func main() {
	fmt.Println(compressString("aabcccccaaa"))
}
