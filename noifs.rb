require 'pry'

def numbers(a,b)
    
    case true
        when a>b
             "#{a} is greater than #{b}"
    
        when a<b
            "#{a} is smaller than #{b}"
        
        when a==b
             "#{a} is equal to #{b}"
        end


end
binding.pry

