"""Inline data/tool-data.json into src/index.template.html -> index.html."""
import sys
from pathlib import Path
root = Path(sys.argv[1] if len(sys.argv) > 1 else '.')
data = (root / 'data/tool-data.json').read_text().replace('</', '<\\/')
tpl = (root / 'src/index.template.html').read_text()
assert '/*__DATA__*/' in tpl
html = tpl.replace('/*__DATA__*/', data)
assert "/*__LAYOUT__*/'force'" in html
# d3-force layout. For the earlier grid layout, change 'force' to 'grid' in the template.
(root / 'index-force.html').write_text(html)
print('wrote index-force.html')
