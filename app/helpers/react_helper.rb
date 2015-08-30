module ReactHelper
  def client(component, id, props)
    sc = script(component, id, props)
    "<div id='#{id}'></div>#{sc}".html_safe
  end


  private

  def script(component, id, props)
    "<script>
      document.addEventListener('DOMContentLoaded', function(ev) {
        renderReact('#{id}', '#{component}', #{props});
      });
    </script>"
  end
end
