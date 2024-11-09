# Predefined valuess = "aaabbbcc"  # Example string
k = 2          # Minimum frequency requirement
n = len(s)
if n < k:    print(0)
else:    # Count frequencies manually
    freq = {}    for char in s:
        if char in freq:            freq[char] += 1
        else:            freq[char] = 1
        if all(count >= k for count in freq.values()):
        print(len(s))    else:
        invalid_chars = [char for char, count in freq.items() if count < k]        
        segments = []        start = 0
        for i, char in enumerate(s):            if char in invalid_chars:
                if i > start:                    segments.append(s[start:i])
                start = i + 1        if start < len(s):
            segments.append(s[start:])        
        max_length = 0        for segment in segments:
            if len(segment) < k:                continue
                        # Count frequencies in the segment
            seg_freq = {}            for char in segment:
                if char in seg_freq:                    seg_freq[char] += 1
                else:
                    seg_freq[char] = 1            
            if all(count >= k for count in seg_freq.values()):                max_length = max(max_length, len(segment))
            else:                seg_invalid_chars = [char for char, count in seg_freq.items() if count < k]
                seg_segments = []                seg_start = 0
                for j, char in enumerate(segment):                    if char in seg_invalid_chars:
                        if j > seg_start:                            seg_segments.append(segment[seg_start:j])
                        seg_start = j + 1                if seg_start < len(segment):
                    seg_segments.append(segment[seg_start:])                
                for seg in seg_segments:                    if len(seg) >= k:
                        seg_freq = {}                        for char in seg:
                            if char in seg_freq:                                seg_freq[char] += 1
                            else:                                seg_freq[char] = 1
                        if all(count >= k for count in seg_freq.values()):                            max_length = max(max_length, len(seg))
        print(max_length)